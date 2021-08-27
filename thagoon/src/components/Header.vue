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
      <div><span>00</span></div>
      <div><span>00:00:00</span></div>
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
  margin: auto;
  padding: 10px 0;
}
header div span {
  font-size: 2em;
  font-weight: 600;
}
header img {
  height: 32px;
  width: 32px;
}
header .startmenu-header {
  display: flex;
  justify-content: space-evenly;
}
header .game-header {
  display: flex;
  justify-content: flex-end;
}
</style>
