<template>
  <div class="game">
    <header>
      <div>
        <span>{{ filters.ZeroPrefix(this.Counter) }}</span>
      </div>
      <div>
        <span> {{ filters.StopwatchTime(this.stopwatch.Time) }}</span>
      </div>
      <div class="btn" @click="this.OpenModal()">
        <img src="../assets/icons/close.svg" />
      </div>
    </header>
    <teleport to="body">
      <div class="modal-placeholder" v-if="this.IsOpen">
        <ConfirmModal @quitGame="this.Close($event)" />
      </div>
    </teleport>
    <div class="gamefield" @click="this.ChangeWord()">
      <div class="placeholder">
        <h1
          v-if="this.Word != ''"
          ref="wordPlaceholder"
          class="animate__animated"
        >
          {{ this.Word }}
        </h1>
        <Loader v-else />
      </div>
    </div>
  </div>
</template>

<script>
import router from '../router/index';
import { ref, onMounted } from 'vue';

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
  components: {
    ConfirmModal,
    Loader,
  },
  setup() {
    // PRIVATE VARIABLES
    const wordPlaceholder = ref(null);
    const wordList = ref([]);

    // PUBLIC VARIABLES
    const Word = ref('');
    const Counter = ref(0);
    const GameSettings = ref(null);
    const IsOpen = ref(false);

    // PRIVATE METHODS
    const getRandomWord = function() {
      let randomNumber;
      do {
        randomNumber = Math.floor(Math.random() * wordList.value.length);
      } while (Word.value === wordList.value[randomNumber]);
      return wordList.value[randomNumber];
    };

    const start = async function() {
      await Promise.all([
        await settings.GetGameSettings(),
        await getWordList(),
      ]).then((data) => {
        GameSettings.value = data[0];
        wordList.value = data[1];
        stopwatch.Start();
        Word.value = getRandomWord();
        Counter.value++;
      });
    };

    // PUBLIC METHODS
    const ChangeWord = function() {
      let animationEndTriggerd = false;

      if (stopwatch.IsRunning && wordPlaceholder.value != null) {
        wordPlaceholder.value.classList.add('animate__backOutRight');
        wordPlaceholder.value.addEventListener('animationend', () => {
          if (!animationEndTriggerd) {
            animationEndTriggerd = true;
            Word.value = getRandomWord();
            Counter.value++;
            wordPlaceholder.value.classList.remove('animate__backOutRight');
            wordPlaceholder.value.classList.add('animate__backInLeft');
          }
        });
      }
    };

    const OpenModal = function() {
      // Pause timer & disable changeWord
      stopwatch.Stop();
      // Open Modal
      IsOpen.value = true;
    };

    const Close = function(quitGame) {
      console.log('Current Score;', {
        Words: Counter.value,
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
        IsOpen.value = false;
      }
    };

    onMounted(async function() {
      await start();
    });

    return {
      filters,
      stopwatch,
      wordPlaceholder,
      ChangeWord,
      OpenModal,
      Close,
      Word,
      IsOpen,
      Counter,
      GameSettings,
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
  --animate-duration: 0.8s;
}

.modal-placeholder {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  z-index: 101;
}
</style>
