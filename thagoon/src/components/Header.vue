<template>
  <header>
    <div class="logout-btn">
      <img src="./../assets/icons/logout-1.svg" />
    </div>
    <div class="settings-btn">
      <img src="./../assets/icons/cogwheel.svg" />
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
header {
  width: 100%;
  display: flex;
  position: absolute;
  top: 0;
  justify-content: space-between;
}
header div {
  height: 64px;
  width: 64px;
  margin: 20px 40px 40px 40px;
}
header img {
  height: 100%;
  width: 100%;
}
</style>
