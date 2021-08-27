<template>
  <header>
    <div class="startmenu-header">
      <div class="btn">
        <img src="../assets/icons/logout-1.svg" />
      </div>
      <div class="btn">
        <img src="../assets/icons/cogwheel.svg" />
      </div>
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
  z-index: 99;
}
header div {
  width: 100%;
  margin: auto;
  padding: 10px 0;
}
header img {
  height: 32px;
  width: 32px;
}
</style>
