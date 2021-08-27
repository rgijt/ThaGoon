<template>
  <div class="game">
    <header>
      <div>
        <span>{{ this.zeroPrefix(counter, 2) }}</span>
      </div>
      <div>
        <span>{{ timer }}</span>
      </div>
      <div class="btn">
        <router-link to="/"><img src="../assets/icons/close.svg"/></router-link>
      </div>
    </header>
    <div class="gamefield" @click="changeWord()">
      <div class="placeholder">
        <h1>{{ word }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Game',
  data: function() {
    return {
      counter: 0,
      timer: '00:00:00',
      word: 'HelloTest',
      wordList: ['Grass', 'Tree', 'Airplane', 'Sticky'],
      started: null,
      running: false,
      timeBegan: null,
    };
  },
  methods: {
    randomWord: function() {
      this.word = 'test';
    },
    changeWord: function() {
      let randomNumber;
      do {
        randomNumber = Math.floor(Math.random() * this.wordList.length);
      } while (this.word === this.wordList[randomNumber]);
      this.word = this.wordList[randomNumber];
    },
    zeroPrefix: function(num, digit) {
      let zero = '';
      for (let i = 0; i < digit; i++) {
        zero += '0';
      }
      return (zero + num).slice(-digit);
    },
    clockRunning: function() {
      let currentTime = new Date();
      let timeElapsed = new Date(currentTime - this.timeBegan),
        hour = timeElapsed.getUTCHours(),
        min = timeElapsed.getUTCMinutes(),
        sec = timeElapsed.getUTCSeconds();

      this.timer =
        this.zeroPrefix(hour, 2) +
        ':' +
        this.zeroPrefix(min, 2) +
        ':' +
        this.zeroPrefix(sec, 2);
    },
    start: function() {
      this.running = true;
      this.timeBegan = new Date();
      this.started = setInterval(this.clockRunning, 10);
    },
  },
  mounted: function() {
    this.start();
  },
};
</script>

<style scoped>
.game {
  width: 100%;
  height: 100vh;
  display: flex;
}

header {
  width: 100%;
  height: 0;
  display: flex;
  justify-content: space-evenly;
  z-index: 99;
}
header div {
  margin: 20px;
}
header div span {
  font-size: 2em;
  font-weight: 600;
}
header div img {
  width: 32px;
  height: 32px;
}

.gamefield {
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
}
.placeholder {
  display: flex;
  width: 100%;
  height: 50%;
  margin: auto;
}
.placeholder h1 {
  margin: auto;
  font-size: 8em;
}
</style>
