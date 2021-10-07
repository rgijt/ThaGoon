<template>
  <div class="page">
    <div class="header">
      <img src="../assets/icons/ThaGoonIcon-192.png" />
      <h1>ThaGoon</h1>
    </div>
    <w-flex wrap>
      <w-form class="xs12 ">
        <w-transition-slide-fade>
          <w-alert v-if="!this.ValidForm" error outline>{{
            this.ErrorMessage
          }}</w-alert>
        </w-transition-slide-fade>
        <w-flex class="xs12 align-center line">
          <span class="xs4">Username</span>
          <w-input type="text" class="xs8" v-model="this.Username"> </w-input>
        </w-flex>
        <w-flex class="xs12 align-center line">
          <span class="xs4">Email</span>
          <w-input type="email" class="xs8" v-model="this.Email"> </w-input>
        </w-flex>
        <w-flex class="xs12 align-center line">
          <span class="xs4">Password</span>
          <w-input type="password" class="xs8" v-model="this.Password">
          </w-input>
        </w-flex>
        <w-flex class="xs12 align-center line">
          <span class="xs4">Confirm Password</span>
          <w-input type="password" class="xs8" v-model="this.ConfirmPassword">
          </w-input>
        </w-flex>
        <a class="btn" href="javascript:void(0);" @click="this.Register"
          >Sign Up</a
        >
        <router-link to="/login">Go back</router-link>
      </w-form>
    </w-flex>
  </div>
</template>
<script>
import { ref } from 'vue';
export default {
  name: 'Register',
  setup() {
    const Username = ref('');
    const Email = ref('');
    const Password = ref('');
    const ConfirmPassword = ref('');
    const ErrorMessage = ref('');
    const ValidForm = ref(true);

    const Register = () => {
      ErrorMessage.value = 'het werkt best prima';
      ValidForm.value = !ValidForm.value;
    };
    return {
      Username,
      Email,
      Password,
      ConfirmPassword,
      ErrorMessage,
      ValidForm,
      Register,
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
