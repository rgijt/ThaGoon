<template>
  <div class="game">
    <header>
      <div>
        <span>{{ filters.ZeroPrefix(counter) }}</span>
      </div>
      <div>
        <span> {{ filters.StopwatchTime(stopwatch.Time) }}</span>
      </div>
      <div class="btn" @click="openModal()">
        <img src="../assets/icons/close.svg" />
      </div>
    </header>
    <teleport to="body">
      <div class="modal-placeholder" v-if="this.isOpen">
        <ConfirmModal @quitGame="this.close($event)" />
      </div>
    </teleport>
    <div class="gamefield" @click="changeWord()">
      <div class="placeholder">
        <h1 v-if="word != ''">{{ word }}</h1>
        <Loader v-else />
      </div>
    </div>
  </div>
</template>

<script>
import router from '../router/index';

// IMPORT LOGIC
import getWordList from '../logic/getWordList';
import filters from '../logic/filters';
import stopwatch from '../logic/stopwatch';
import settings from '../logic/settings';

// IMPORT COMPONENTS
import ConfirmModal from '../components/ConfirmModal.vue';
import Loader from '../components/Loader.vue';

export default {
  name: 'Game',
  data: function() {
    return {
      counter: 0,
      word: '',
      wordList: [],
      settings: null,
      isOpen: false,
    };
  },
  components: {
    ConfirmModal,
    Loader,
  },
  methods: {
    changeWord: function() {
      let randomNumber;

      if (stopwatch.IsRunning) {
        do {
          randomNumber = Math.floor(Math.random() * this.wordList.length);
        } while (this.word === this.wordList[randomNumber]);

        this.word = this.wordList[randomNumber];
        this.counter++;
      }
    },
    start: async function() {
      await Promise.all([
        await settings.GetGameSettings(),
        await getWordList(),
      ]).then((data) => {
        this.settings = data[0];
        this.wordList = data[1];
        stopwatch.Start();
        this.changeWord();
      });
    },
    close: function(quitGame) {
      console.log('Current Score;', {
        Words: this.counter,
        Time: this.timer,
      });

      if (quitGame) {
        // TODO;
        // Send data to API
        stopwatch.Stop(true);
        router.push('/');
      } else {
        // Start timer & enable changeWord
        stopwatch.Start();
        // Close Modal
        this.isOpen = false;
      }
    },
    openModal: function() {
      // Pause timer & disable changeWord
      stopwatch.Stop();
      // Open Modal
      this.isOpen = true;
    },
  },
  mounted: function() {
    this.start();
  },
  setup() {
    // Setup

    // Methods

    return {
      filters,
      stopwatch,
    };
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

.modal-placeholder {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  z-index: 101;
}
</style>
