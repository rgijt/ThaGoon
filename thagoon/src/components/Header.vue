<template>
  <div class="header">
    <div class="logout-btn">
      <img src="./../assets/icons/logout-1.svg" />
    </div>
    <div class="settings-btn">
      <img src="./../assets/icons/cogwheel.svg" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style>
div.header {
  width: 100%;
  display: flex;
  position: absolute;
  top: 0;
  justify-content: space-between;
}
div.header div {
  height: 64px;
  width: 64px;
  margin: 20px 40px 40px 40px;
}
div.header img {
  height: 100%;
  width: 100%;
}
</style>
