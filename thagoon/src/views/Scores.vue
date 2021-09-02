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
    <div class="scorelist" v-if="this.scorelist != null">
      <span v-if="this.scorelist.length === 0">No scores yet...</span>
      <div class="score">
        <span><div class="profile-image"></div></span>
        <span>00:00:00</span>
        <span>00</span>
      </div>
      <div class="score">
        <span><div class="profile-image"></div></span>
        <span>00:00:00</span>
        <span>00</span>
      </div>
    </div>
  </div>
</template>

<script>
import { set, get } from 'idb-keyval';

async function getScores() {
  await set(
    'scores',
    JSON.stringify([{ image: '', time: '00:04:32', count: 9 }])
  );

  await get('scores')
    .then((e) => {
      if (e === undefined) {
        this.scorelist = null;
      } else {
        this.scorelist = JSON.parse(e);
      }
    })
    .catch((e) => {
      console.log(
        'Something went wrong when getting your user settings from your indexenDB...',
        e
      );
    });
}

export default {
  name: 'Scores',
  data: function() {
    return {
      scorelist: null,
    };
  },
  methods: {
    start: async function() {
      console.log(this.scorelist);
      let test = await getScores();
      console.log(this.scorelist, test);
      this.scorelist = [
        { image: '', time: '00:04:32', count: 9 },
        { image: '', time: '00:04:32', count: 9 },
      ];
      console.log(this.scorelist[0]);
    },
  },
  mounted: function() {
    this.start();
    console.log(this.scorelist);
  },
};
</script>

<style scoped>
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
  height: 100%;
  display: block;
  margin: 0 20px;
  overflow-y: scroll;
}

div.score {
  display: flex;
  justify-content: space-around;
  font-size: 1em;
  font-weight: 600;
  padding: 10px;
  align-items: center;
}
div.score .profile-image {
  display: flex;
  height: 48px;
  width: 48px;
  color: #ffffff;
  background-color: #3c3c3c;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  background-image: url('../assets/img/geit.jpg');
  background-position: center;
  background-size: cover;
}
</style>
