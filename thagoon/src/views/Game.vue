<template>
  <div class="page">
    <w-flex wrap class="header align-center">
      <w-flex class="xs4 justify-start">
        <span>{{ filters.ZeroPrefix(this.Counter) }}</span>
      </w-flex>
      <w-flex class="xs4 justify-center">
        <span> {{ filters.StopwatchTime(this.stopwatch.Time) }}</span>
      </w-flex>
      <w-flex class="xs4 justify-end" @click="this.OpenModal()">
        <img src="../assets/icons/close.svg" />
      </w-flex>
    </w-flex>
    <teleport to="body">
      <div class="modal-placeholder" v-if="this.IsOpen">
        <ConfirmModal @quitGame="this.Close($event)" />
      </div>
    </teleport>
    <div class="gamefield" @click="this.ChangeWord()">
      <div class="placeholder" ref="wordPlaceholder">
        <h1 v-if="this.Word != ''" class="">
          {{ this.Word }}
        </h1>
        <Loader v-else />
      </div>
    </div>
  </div>
</template>

<script>
import router from '../router/index';
import { ref, onMounted, watch } from 'vue';

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

    const getData = async function() {
      await Promise.all([
        await settings.GetGameSettings(),
        await getWordList(),
      ]).then((data) => {
        GameSettings.value = data[0];
        wordList.value = data[1];
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

    onMounted(async () => {
      await getData();

      if (GameSettings.value.UseAnimation) {
        wordPlaceholder.value.classList.add('animate__animated');
        wordPlaceholder.value.style = `--animate-duration: ${GameSettings.value.AnimationSpeed}s;`;
      }

      if (GameSettings.value.UseTimer) {
        watch(
          () => stopwatch.Time.Seconds,
          (seconds) => {
            if (seconds % GameSettings.value.Timer === 0) {
              ChangeWord();
            }
          }
        );
      }

      if (GameSettings.value.UseMetronome) {
        console.log(
          'Sorry we know you want to use this but, we havent add the metronome yet.'
        );
      }

      if (GameSettings.value.UseRecording) {
        console.log(
          'Sorry we know you want to use this but, we havent add the recording yet.'
        );
      }

      stopwatch.Start();
      Word.value = getRandomWord();
      Counter.value++;
    });

    return {
      wordPlaceholder,
      filters,
      stopwatch,
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
.w-flex.wrap.header {
  width: 100%;
  position: absolute;
  padding: 20px;
  z-index: 99;
}
.w-flex div span {
  font-size: 2em;
  font-weight: 600;
}
.w-flex div img {
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
