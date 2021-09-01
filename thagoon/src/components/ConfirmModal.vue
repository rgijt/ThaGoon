<template>
  <div>
    <div class="overlay"></div>
    <div class="modal">
      <h1>Are you sure you wanna stop the game?</h1>
      <div class="confirmation-holder">
        <div class="btn">YES</div>
        <div class="btn">NO</div>
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
  methods: {},
};
</script>

<style scoped>
.modal {
  background-color: #ffffff;
  width: 50%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  text-align: center;
}
.confirmation-holder {
  display: flex;
  justify-content: space-around;
}

.btn {
  margin: 20px 40px;
  padding: 5px;
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
</style>
