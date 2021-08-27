<template>
  <div>{{ time }}</div>
</template>

<script>
let timeBegan = null,
  timeStopped = null,
  stoppedDuration = 0,
  started = null,
  running = false;

export default {
  name: 'Stopwatch',
  data: function() {
    return {
      time: '00:00:00',
    };
  },
  methods: {
    start: function() {
      if (running) return;

      if (timeBegan === null) {
        reset();
        timeBegan = new Date();
      }

      if (timeStopped !== null) {
        stoppedDuration += new Date() - timeStopped;
      }

      started = setInterval(clockRunning, 10);
      running = true;
    },
    clockRunning: function() {
      let currentTime = new Date(),
        timeElapsed = new Date(currentTime - timeBegan - stoppedDuration),
        hour = timeElapsed.getUTCHours(),
        min = timeElapsed.getUTCMinutes(),
        sec = timeElapsed.getUTCSeconds();

      this.time = `${zeroPrefix(hour, 2)}:${zeroPrefix(min, 2)}:${zeroPrefix(
        sec,
        2
      )}`;
    },
    zeroPrefix: function(num, digit) {
      let zero = '';
      for (var i = 0; i < digit; i++) {
        zero += '0';
      }
      return (zero + num).slice(-digit);
    },
  },
};
</script>
