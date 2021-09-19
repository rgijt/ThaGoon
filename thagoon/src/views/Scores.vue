<template>
  <div class="page">
    <header>
      <router-link to="/">
        <img class="close" src="../assets/icons/close.svg" />
      </router-link>
      <div class="head">
        <img src="../assets/icons/trophy.svg" />
        <h1>SCORES</h1>
      </div>
    </header>
    <div class="scorelist" v-if="this.scorelist != null" ref="scrollComponent">
      <span v-if="this.scorelist.length === 0">No scores yet...</span>
      <ScoreLine
        v-for="(score, index) in scorelist"
        :key="index"
        :score="score"
      />
      <div class="score" v-if="this.scorelist.length !== 0">
        <span>Dit zijn alle scores...</span>
      </div>
    </div>
  </div>
</template>

<script>
import ScoreLine from '../components/ScoreLine.vue';
import { ref, onMounted, onUnmounted } from 'vue';
import getScoresList from '../logic/getScoresList';

export default {
  name: 'Scores',
  components: {
    ScoreLine,
  },
  setup() {
    const scorelist = ref([]);
    const scrollComponent = ref(null);

    const getScorelist = async () => {
      let scorelistAmount =
        scorelist.value != null ? scorelist.value.length : 0;
      try {
        //scorelist.value = await getScoresList(10, scorelistAmount);
        let newScoreList = await getScoresList(10, scorelistAmount);
        scorelist.value.push(...newScoreList);
      } catch (e) {
        console.log(e);
      }
    };
    getScorelist();

    onMounted(() => {
      document
        .getElementsByClassName('scorelist')[0]
        .addEventListener('scroll', handleScroll);
    });

    onUnmounted(() => {
      document
        .getElementsByClassName('scorelist')[0]
        .addEventListener('scroll', handleScroll);
    });

    const handleScroll = () => {
      let element = scrollComponent.value;
      let scrollY = element.scrollHeight - element.scrollTop;
      let height = element.offsetHeight;
      let offset = height - scrollY;
      if (offset === 0) {
        getScorelist();
      }
    };

    return {
      scorelist,
      scrollComponent,
    };
  },
};
</script>

<style scoped>
.page {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
header {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 20px;
}
.close {
  width: 32px;
  height: 32px;
}
.head {
  width: 100%;
}
.head img {
  width: 128px;
  height: 128px;
}
.head h1 {
  font-size: 2em;
}

div.scorelist {
  height: 55%;
  display: block;
  margin: 0 20px;
  overflow-y: scroll;
}
.score:last-child {
  margin: 40px 0;
}
</style>
