<template>
  <div class="game" @click="changeWord()">
    <div class="placeholder">
      <h1>{{ word }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Game',
  data: function() {
    return {
      word: 'HelloTest',
      wordList: ['Grass', 'Tree', 'Airplane', 'Sticky'],
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
  },
  mounted: function() {},
};
</script>

<style scoped>
.game {
  width: 100%;
  height: 100vh;
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
