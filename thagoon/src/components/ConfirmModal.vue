<template>
  <div class="modal-holder">
    <div class="overlay"></div>
    <div class="modal">
      <h1>Do you wanna quit?</h1>
      <div class="confirmation-holder">
        <div class="btn" @click="this.confirmation(true)">YES</div>
        <div class="btn" @click="this.confirmation(false)">NO</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ConfirmModal',
  data: function() {
    return {
      stopGame: false,
    };
  },
  methods: {
    confirmation: function(quitGame) {
      this.$emit('quitGame', quitGame);
    },
  },
};
</script>

<style scoped>
.modal-holder {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background-color: #ffffff;
  width: 60%;
  padding: 20px;
  display: flex;
  position: fixed;
  flex-direction: column;
  border-radius: 5px;
  text-align: center;
  z-index: 103;
}
.confirmation-holder {
  display: flex;
  justify-content: space-around;
  margin: 20px 0 0 0;
}
h1 {
  font-weight: 600;
  text-transform: uppercase;
  font-size: 2em;
}
.btn {
  width: 25%;
  padding: 5px 20px;
  color: #ffffff;
  background-color: #ff5a5f;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
  text-transform: uppercase;
  text-align: center;
  font-size: 1em;
  font-weight: 600;
}

.btn:hover {
  transform: scale(1.1);
}

.overlay {
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #000000;
  opacity: 0.5;
  z-index: 102;
}
</style>
