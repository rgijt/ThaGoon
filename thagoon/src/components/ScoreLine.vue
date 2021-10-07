<template>
  <w-flex wrap class="score">
    <span class="xs4">
      <div
        class="profile-image"
        style="background-image: {{ score.image }};"
      ></div>
    </span>
    <span class="xs4">{{ score.time }}</span>
    <span class="xs4">{{ filters.ZeroPrefix(score.count) }}</span>
  </w-flex>
</template>
<script>
import filters from '../logic/filters.js';
export default {
  props: {
    score: Object,
  },
  setup() {
    return {
      filters,
    };
  },
};
</script>
<style scoped>
div.score {
  display: flex;
  justify-content: space-around;
  font-size: 1em;
  font-weight: 600;
  padding: 20px 10px;
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
  background-position: center;
  background-size: cover;
}
</style>
