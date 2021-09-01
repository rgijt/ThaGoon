<template>
  <div class="game">
    <header>
      <div>
        <span>{{ this.zeroPrefix(counter, 2) }}</span>
      </div>
      <div>
        <span>{{ timer }}</span>
      </div>
      <div class="btn" @click="close()">
        <img src="../assets/icons/close.svg" />
      </div>
    </header>
    <teleport to="body">
      <div class="modal-holder" v-if="this.isOpen">
        <ConfirmModal />
      </div>
    </teleport>
    <div class="gamefield" @click="changeWord()">
      <div class="placeholder">
        <h1 v-if="word != ''">{{ word }}</h1>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          style="margin:auto;display:block;"
          width="200px"
          height="200px"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
        >
          <g transform="rotate(0 50 50)">
            <rect
              x="49"
              y="22.5"
              rx="0.75"
              ry="0.75"
              width="2"
              height="15"
              fill="#3c3c3c"
            >
              <animate
                attributeName="opacity"
                values="1;0"
                keyTimes="0;1"
                dur="1s"
                begin="-0.9166666666666666s"
                repeatCount="indefinite"
              ></animate>
            </rect>
          </g>
          <g transform="rotate(30 50 50)">
            <rect
              x="49"
              y="22.5"
              rx="0.75"
              ry="0.75"
              width="2"
              height="15"
              fill="#3c3c3c"
            >
              <animate
                attributeName="opacity"
                values="1;0"
                keyTimes="0;1"
                dur="1s"
                begin="-0.8333333333333334s"
                repeatCount="indefinite"
              ></animate>
            </rect>
          </g>
          <g transform="rotate(60 50 50)">
            <rect
              x="49"
              y="22.5"
              rx="0.75"
              ry="0.75"
              width="2"
              height="15"
              fill="#3c3c3c"
            >
              <animate
                attributeName="opacity"
                values="1;0"
                keyTimes="0;1"
                dur="1s"
                begin="-0.75s"
                repeatCount="indefinite"
              ></animate>
            </rect>
          </g>
          <g transform="rotate(90 50 50)">
            <rect
              x="49"
              y="22.5"
              rx="0.75"
              ry="0.75"
              width="2"
              height="15"
              fill="#3c3c3c"
            >
              <animate
                attributeName="opacity"
                values="1;0"
                keyTimes="0;1"
                dur="1s"
                begin="-0.6666666666666666s"
                repeatCount="indefinite"
              ></animate>
            </rect>
          </g>
          <g transform="rotate(120 50 50)">
            <rect
              x="49"
              y="22.5"
              rx="0.75"
              ry="0.75"
              width="2"
              height="15"
              fill="#3c3c3c"
            >
              <animate
                attributeName="opacity"
                values="1;0"
                keyTimes="0;1"
                dur="1s"
                begin="-0.5833333333333334s"
                repeatCount="indefinite"
              ></animate>
            </rect>
          </g>
          <g transform="rotate(150 50 50)">
            <rect
              x="49"
              y="22.5"
              rx="0.75"
              ry="0.75"
              width="2"
              height="15"
              fill="#3c3c3c"
            >
              <animate
                attributeName="opacity"
                values="1;0"
                keyTimes="0;1"
                dur="1s"
                begin="-0.5s"
                repeatCount="indefinite"
              ></animate>
            </rect>
          </g>
          <g transform="rotate(180 50 50)">
            <rect
              x="49"
              y="22.5"
              rx="0.75"
              ry="0.75"
              width="2"
              height="15"
              fill="#3c3c3c"
            >
              <animate
                attributeName="opacity"
                values="1;0"
                keyTimes="0;1"
                dur="1s"
                begin="-0.4166666666666667s"
                repeatCount="indefinite"
              ></animate>
            </rect>
          </g>
          <g transform="rotate(210 50 50)">
            <rect
              x="49"
              y="22.5"
              rx="0.75"
              ry="0.75"
              width="2"
              height="15"
              fill="#3c3c3c"
            >
              <animate
                attributeName="opacity"
                values="1;0"
                keyTimes="0;1"
                dur="1s"
                begin="-0.3333333333333333s"
                repeatCount="indefinite"
              ></animate>
            </rect>
          </g>
          <g transform="rotate(240 50 50)">
            <rect
              x="49"
              y="22.5"
              rx="0.75"
              ry="0.75"
              width="2"
              height="15"
              fill="#3c3c3c"
            >
              <animate
                attributeName="opacity"
                values="1;0"
                keyTimes="0;1"
                dur="1s"
                begin="-0.25s"
                repeatCount="indefinite"
              ></animate>
            </rect>
          </g>
          <g transform="rotate(270 50 50)">
            <rect
              x="49"
              y="22.5"
              rx="0.75"
              ry="0.75"
              width="2"
              height="15"
              fill="#3c3c3c"
            >
              <animate
                attributeName="opacity"
                values="1;0"
                keyTimes="0;1"
                dur="1s"
                begin="-0.16666666666666666s"
                repeatCount="indefinite"
              ></animate>
            </rect>
          </g>
          <g transform="rotate(300 50 50)">
            <rect
              x="49"
              y="22.5"
              rx="0.75"
              ry="0.75"
              width="2"
              height="15"
              fill="#3c3c3c"
            >
              <animate
                attributeName="opacity"
                values="1;0"
                keyTimes="0;1"
                dur="1s"
                begin="-0.08333333333333333s"
                repeatCount="indefinite"
              ></animate>
            </rect>
          </g>
          <g transform="rotate(330 50 50)">
            <rect
              x="49"
              y="22.5"
              rx="0.75"
              ry="0.75"
              width="2"
              height="15"
              fill="#3c3c3c"
            >
              <animate
                attributeName="opacity"
                values="1;0"
                keyTimes="0;1"
                dur="1s"
                begin="0s"
                repeatCount="indefinite"
              ></animate>
            </rect>
          </g>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
//import router from '../router/index';
import { get } from 'idb-keyval';

// IMPORT COMPONENTS
import ConfirmModal from '../components/ConfirmModal.vue';

async function getSettings() {
  let settings = null;

  // Check indexenDB if user settings are available
  await get('settings')
    .then((e) => {
      settings = e == undefined ? null : e;
    })
    .catch((e) => {
      console.error(
        'Something went wrong when getting your user settings from your indexenDB...',
        e
      );
    });

  // Return settings if not null
  if (settings !== null) return settings;

  // TODO;
  // Replace default value and make a real call
  // Alleen juiste url plaatsen en then functie fixen.
  // Check API if user settings are available
  await fetch('../../data/api.json', {
    method: 'get',
  })
    .then((e) => {
      //settings = e;
      settings = {
        Timer: null,
        Recording: false,
        Metronome: null,
      };
      console.log('Not Important', e);
    })
    .catch((e) => {
      console.error(
        'Something went wrong when getting your user settings from our API...',
        e
      );
    });

  return new Promise((res) => {
    res(settings);
  });
}

async function getWordList() {
  let wordList = null;

  // TODO;
  // Replace default value and make a real call
  // Alleen juiste url plaatsen en then functie fixen.
  // Check API if user settings are available
  await fetch('../../data/api.json', {
    method: 'get',
  })
    .then((e) => {
      // wordList = e;
      wordList = [
        'Stacks',
        'Ice',
        'Cap',
        'Grass',
        'Tree',
        'Cheddar',
        'Airplane',
        'Sticky',
        'Monkey',
        'Respect',
        'Heavy',
        'Big',
        'Yesterday',
      ];
      console.log('Not Important', e);
    })
    .catch((e) => {
      console.error(
        'Something went wrong when getting your user settings from our API...',
        e
      );
    });

  return new Promise((res) => {
    res(wordList);
  });
}

export default {
  name: 'Game',
  data: function() {
    return {
      counter: 0,
      timer: '00:00:00',
      word: '',
      wordList: [],
      started: null,
      running: false,
      timeBegan: null,
      settings: null,
      isOpen: false,
    };
  },
  components: {
    ConfirmModal,
  },
  methods: {
    changeWord: function() {
      let randomNumber;

      if (this.running) {
        do {
          randomNumber = Math.floor(Math.random() * this.wordList.length);
        } while (this.word === this.wordList[randomNumber]);
        this.word = this.wordList[randomNumber];
        this.counter++;
      }
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
    start: async function() {
      await Promise.all([await getSettings(), await getWordList()]).then(
        (data) => {
          this.settings = data[0];
          this.wordList = data[1];
          this.running = true;
          this.timeBegan = new Date();

          this.changeWord();
          this.started = setInterval(this.clockRunning, 10);
        }
      );
    },
    close: function() {
      // TODO;
      // Pauze timer

      // TODO;
      // Confirm ending game

      // TODO;
      // Send data to API

      console.log('Your score was;', {
        Words: this.counter,
        Time: this.timer,
      });
      this.isOpen = true;
      //router.push('/');
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
  font-size: 5em;
}

.modal-holder {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  z-index: 101;
}
</style>
