<template>
  <div class="page">
    <div class="header">
      <img src="../assets/icons/ThaGoonIcon-192.png" />
      <h1>ThaGoon</h1>
    </div>
    <w-flex wrap>
      <w-form class="xs12 ">
        <w-transition-slide-fade>
          <w-alert v-if="this.ErrorMessage != ''" error outline>{{
            this.ErrorMessage
          }}</w-alert>
        </w-transition-slide-fade>
        <w-flex class="xs12 align-center line">
          <span class="xs4">Email</span>
          <w-input type="email" class="xs8" v-model="this.Email"> </w-input>
        </w-flex>
        <a class="btn" href="javascript:void(0);" @click="this.Send">Send</a>
        <router-link to="/login">Go back</router-link>
      </w-form>
    </w-flex>
  </div>
</template>
<script>
import { ref } from 'vue';
export default {
  name: 'ForgotPassword',
  setup() {
    const Email = ref('');
    const ErrorMessage = ref('');

    const Send = () => {
      ErrorMessage.value = 'It workes again and again';
    };
    return {
      Email,
      ErrorMessage,
      Send,
    };
  },
};
</script>

<style scoped>
.page {
  padding: 0 20px;
}
form {
  color: #3c3c3c;
  display: flex;
  flex-direction: column;
  margin: auto 0;
  text-align: center;
  font-weight: 600;
}
.w-alert {
  margin-top: -52px;
}
.line {
  text-align: start;
}
a.btn {
  margin: 20px 40px;
  font-size: 2em;
  font-weight: 600;
}

.header {
  font-size: 2em;
}
.header img {
  margin: 20px;
}
</style>
