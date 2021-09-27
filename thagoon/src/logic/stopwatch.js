import { ref, reactive } from 'vue';

const IsRunning = ref(running);
const Time = reactive({
  Hours: 0,
  Minutes: 0,
  Seconds: 0,
});

let started = null;
let running = false;
let timeBegan = null;
let timeStopped = null;
let stoppedDuration = 0;

const timer = function() {
  let currentTime = new Date();
  let timeElapsed = new Date(currentTime - timeBegan - stoppedDuration);
  (Time.Hours = timeElapsed.getUTCHours()),
    (Time.Minutes = timeElapsed.getUTCMinutes()),
    (Time.Seconds = timeElapsed.getUTCSeconds());
};

const reset = function() {
  Time.Hours = 0;
  Time.Minutes = 0;
  Time.Seconds = 0;
  started = null;
  running = false;
  timeBegan = null;
  timeStopped = null;
  stoppedDuration = 0;
};

export default {
  Time,
  IsRunning,
  Start() {
    running = true;
    if (timeStopped != null) {
      stoppedDuration += new Date() - timeStopped;
    } else {
      timeBegan = new Date();
    }
    started = setInterval(timer, 10);
  },
  Stop(resetStopwatch = false) {
    running = false;
    timeStopped = new Date();
    clearInterval(started);
    if (resetStopwatch) {
      reset();
    }
  },
};
