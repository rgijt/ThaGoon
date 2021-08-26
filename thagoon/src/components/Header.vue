<template>
  <header>
    <!-- <div class="startmenu-header">
      <div class="btn">
        <img src="../assets/icons/logout-1.svg" />
      </div>
      <div class="btn">
        <img src="../assets/icons/cogwheel.svg" />
      </div>
    </div> -->
    <div class="game-header">
      <div class="btn">
        <router-link to="/"><img src="../assets/icons/close.svg"/></router-link>
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
}
header .btn {
  height: 64px;
  width: 64px;
  margin: 20px 40px 40px 40px;
}
header img {
  height: 100%;
  width: 100%;
}
header .startmenu-header {
  display: flex;
  justify-content: space-between;
}
header .game-header {
  display: flex;
  justify-content: flex-end;
}
</style>
