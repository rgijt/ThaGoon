<template>
  <div class="page">
    <div class="header">
      <img src="../assets/icons/ThaGoonIcon-192.png" />
      <h1>ThaGoon</h1>
    </div>
    <form>
      <fieldset>
        <span>Email</span>
        <input type="email" />
      </fieldset>
      <fieldset>
        <span>Password</span>
        <input type="password" />
      </fieldset>
      <a class="btn" href="">login</a>
      <router-link to="/forgotpassword">Forgot Password?</router-link><br />
      <router-link to="/register">Create a Account</router-link>
    </form>
  </div>
</template>
<script>
export default {
  name: 'Login',
};
</script>

<style scoped>
.page {
  height: calc(100vh - 43px);
  display: flex;
  flex-direction: column;
  max-width: 512px;
  margin: auto;
}
form {
  display: flex;
  flex-direction: column;
  margin: auto 0;
}
input {
  width: 50%;
  border: 0;
  border-bottom: 1px solid #3c3c3c;
  background-color: #f5f5f5;
  font-family: 'Lato', sans-serif;
  font-weight: 600;
}
input:focus-visible {
  outline: none;
}

fieldset {
  border: 0;
  font-weight: 600;
  margin: 10px;
  display: flex;
  justify-content: space-between;
}

a.btn {
  background-color: #ff5a5f;
  color: #ffffff;
  text-transform: uppercase;
  font-size: 2em;
  padding: 10px;
  margin: 20px 40px;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
  font-weight: 600;
}
a.btn:hover {
  transform: scale(1.02);
}

.header {
  font-size: 2em;
}
.header img {
  margin: 20px;
}
</style>
