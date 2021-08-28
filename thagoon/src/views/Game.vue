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
    <div class="gamefield" @click="changeWord()">
      <div class="placeholder">
        <h1>{{ word }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
import router from '../router/index';
import { get } from 'idb-keyval';

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
      word: 'loading...',
      wordList: [],
      started: null,
      running: false,
      timeBegan: null,
      settings: null,
    };
  },
  methods: {
    changeWord: function() {
      let randomNumber;

      if (this.wordList != undefined) {
        do {
          randomNumber = Math.floor(Math.random() * this.wordList.length);
        } while (this.word === this.wordList[randomNumber]);
        this.word = this.wordList[randomNumber];
      } else {
        this.word = 'Loading...';
      }

      this.counter++;
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
      // Set
      this.running = true;
      this.timeBegan = new Date();

      // Get settings from localStorage,API or return default
      await getSettings()
        .then((e) => {
          this.settings = e;
        })
        .catch((e) => {
          console.log(e);
        });
      // TODO;
      // Get random wordList from API
      await getWordList()
        .then((e) => {
          setTimeout(function() {
            this.wordList = e;
          }, 3000);
        })
        .catch((e) => {
          console.log(e);
        });

      // Start
      // TODO;
      // Add metronome functions
      this.changeWord();
      this.started = setInterval(this.clockRunning, 10);
    },
    close: function() {
      // TODO;
      // Pauze timer

      // TODO;
      // Confirm ending game

      // TODO
      // Send data to API

      console.log('Your score was;', {
        Words: this.counter,
        Time: this.timer,
      });
      router.push('/');
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
</style>
