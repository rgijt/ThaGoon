<template>
  <div class="page">
    <header>
      <router-link to="/">
        <img src="../assets/icons/close.svg" />
      </router-link>
    </header>
    <div class="top">
      <img src="../assets/icons/trophy.svg" />
      <h1>SCORES</h1>
    </div>
    <div class="scorelist" v-if="this.scorelist != null" ref="scrollComponent">
      <span v-if="this.scorelist.length === 0 && this.totalScorelist === true"
        >No scores yet...</span
      >
      <ScoreLine
        v-for="(score, index) in scorelist"
        :key="index"
        :score="score"
      />
      <span class="score" v-if="this.totalScorelist !== true">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          style="margin:0 auto 50px auto;display:block;"
          width="68px"
          height="68px"
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
      </span>
      <div
        class="score"
        v-if="this.scorelist.length !== 0 && this.totalScorelist === true"
      >
        <span>Dit zijn alle scores...</span>
      </div>
    </div>
  </div>
</template>

<script>
import ScoreLine from '../components/ScoreLine.vue';
import { ref, onMounted, onUnmounted } from 'vue';
import getScoresList from '../logic/getScoresList';
import router from '../router/index';

export default {
  name: 'Scores',
  components: {
    ScoreLine,
  },
  setup() {
    const scorelist = ref([]);
    const totalScorelist = ref(false);
    const scrollComponent = ref(null);

    const getScorelist = async () => {
      let scorelistAmount =
        scorelist.value != null ? scorelist.value.length : 0;
      try {
        let newScoreList = await getScoresList(10, scorelistAmount);
        if (newScoreList == null) {
          totalScorelist.value = true;
        } else {
          scorelist.value.push(...newScoreList);
        }
      } catch (e) {
        console.log(e);
      }
    };
    getScorelist();

    const closeSettings = () => {
      router.push('/');
    };

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
      if (offset === 0 && !totalScorelist.value) {
        getScorelist();
      }
    };

    return {
      scorelist,
      scrollComponent,
      totalScorelist,
      closeSettings,
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
  justify-content: flex-end;
}
header img {
  width: 32px;
  height: 32px;
  margin: 20px;
}
.top {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.top img {
  width: 128px;
  height: 128px;
  margin: auto;
}
.top h1 {
  font-size: 2em;
  margin-top: 10px;
}

div.scorelist {
  display: block;
  margin: 0 20px;
  overflow-y: scroll;
}
.score:last-child {
  margin: 30px 0 80px 0;
}
</style>
