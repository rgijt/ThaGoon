<template>
  <header v-if="$route.path === '/'">
    <div>
      <router-link to="/settings">
        <img src="../assets/icons/cogwheel.svg" />
      </router-link>
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
  justify-content: flex-end;
}
header div {
  padding: 20px;
}
header img {
  height: 32px;
  width: 32px;
}
</style>
