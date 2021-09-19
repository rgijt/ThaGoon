<template>
  <div class="score">
    <span
      ><div
        class="profile-image"
        style="background-image: {{ score.image }};"
      ></div
    ></span>
    <span>{{ score.time }}</span>
    <span>{{ score.count }}</span>
  </div>
</template>
<script>
export default {
  props: {
    score: Object,
  },
};
</script>
<style scoped>
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
  background-position: center;
  background-size: cover;
}
</style>
