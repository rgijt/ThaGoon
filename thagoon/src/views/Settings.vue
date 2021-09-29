<template>
  <div class="page">
    <header>
      <router-link to="/">
        <img src="../assets/icons/close.svg" />
      </router-link>
    </header>
    <div class="top">
      <img src="../assets/icons/cogwheel.svg" />
      <h1>SETTINGS</h1>
    </div>
    <div class="main">
      <div class="option-group" v-if="this.gameSettings != null">
        <span class="option-group-title"><b>Ingame</b></span>
        <!-- Timer -->
        <div class="option-holder">
          <div class="option">
            <span>Timer</span>
            <input
              type="checkbox"
              v-model="this.gameSettings.UseTimer"
              @change="this.updateSettings()"
            />
            <div>
              <input
                class="timer-input"
                type="number"
                min="0"
                max="60"
                v-model="this.gameSettings.Timer"
                :disabled="!this.gameSettings.UseTimer"
                @change="this.updateSettings()"
              />S
            </div>
          </div>
        </div>
        <!-- Recording -->
        <div class="option-holder">
          <div class="option">
            <span>Recording</span>
            <input
              type="checkbox"
              v-model="this.gameSettings.UseRecording"
              @change="this.updateSettings()"
            />
          </div>
        </div>
        <!-- Metronome -->
        <div class="option-holder">
          <div class="option">
            <span>Metronome</span>
            <input
              type="checkbox"
              v-model="this.gameSettings.UseMetronome"
              @change="this.updateSettings()"
            />
            <input
              class="bpm-input"
              type="number"
              min="80"
              max="180"
              v-model="this.gameSettings.Metronome"
              :disabled="!this.gameSettings.UseMetronome"
              @change="this.updateSettings()"
            />
          </div>
        </div>
      </div>
      <div class="option-group" v-if="this.userDetail != null">
        <span class="option-group-title"><b>User</b></span>
        <!-- Profile image -->
        <div class="option-holder">
          <div class="option">
            <div class="name">
              <div
                class="profile-image"
                :style="{
                  backgroundImage:
                    'url(' + this.userDetail.ProfileImageUrl + ')',
                }"
              ></div>
            </div>
            <input type="file" class="update-img-btn" />
          </div>
        </div>
        <!-- Username -->
        <div class="option-holder">
          <div class="option">
            <span>Username</span>
            <input
              class="username-input"
              type="text"
              v-model="this.userDetail.Username"
              @change="this.updateUser()"
            />
          </div>
        </div>
        <div class="option-holder">
          <div class="option">
            <a class="logout-btn" @click="this.logOut()">Logout</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import getUser from '../logic/getUser';
import setUser from '../logic/setUser';
import { ref } from 'vue';

import settings from '../logic/settings';

export default {
  name: 'Settings',
  methods: {
    logOut: function() {
      alert('Log out');
    },
    updateSettings: function() {
      settings.SetGameSettings(this.gameSettings);
    },
    updateUser: function() {
      console.log('test');
      setUser(
        this.userDetail.Id,
        this.userDetail.Username,
        this.userDetail.ProfileImageUrl,
        this.userDetail.Token,
        false
      );
    },
  },
  setup() {
    const gameSettings = ref(null);
    const userDetail = ref(null);

    const getGameSettings = async () => {
      try {
        gameSettings.value = await settings.GetGameSettings();
      } catch (e) {
        console.log(e);
      }
    };
    getGameSettings();
    const getUserDetail = async () => {
      try {
        let user = await getUser();
        userDetail.value = user;
      } catch (e) {
        console.log(e);
      }
    };
    getUserDetail();

    return {
      gameSettings,
      userDetail,
    };
  },
};
</script>
<style scoped>
.page {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
header {
  display: flex;
  justify-content: flex-end;
}
header img {
  width: 32px;
  height: 32px;
  margin: 20px;
}
.top {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.top img {
  width: 128px;
  height: 128px;
  margin: auto;
}
.top h1 {
  color: #3c3c3c;
  font-size: 2em;
  margin-top: 10px;
}

/* MAIN */
.main {
  font-weight: 600;
  display: block;
  margin: 0 20px 45px 20px;
  overflow-y: scroll;
}
.option-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.option-group .option-group-title {
  color: #3c3c3c;
  font-size: 1.2em;
  font-style: italic;
}
.option-group .option-holder {
  width: 100%;
}
.option-group .option-holder .option {
  display: flex;
  margin: 20px;
  justify-content: space-between;
  align-items: center;
}

.option .profile-image {
  display: flex;
  height: 48px;
  width: 48px;
  color: #ffffff;
  background-color: #3c3c3c;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  background-position: center;
  background-size: cover;
}
.option .update-img-btn {
  color: #ffffff;
  background-color: #ff5a5f;
  padding: 10px;
  border-radius: 5px;
}
.option .logout-btn {
  margin: auto;
  color: #3c3c3c;
  font-family: 'Lato', sans-serif;
  font-size: 1em;
  text-decoration: underline;
}
.option input[type='text'] {
  width: 50%;
  border: 0;
  border-bottom: 1px solid #3c3c3c;
  background-color: #f5f5f5;
  font-family: 'Lato', sans-serif;
  font-weight: 600;
}
.option input[type='text']:focus-visible {
  outline: none;
}
.option input[type='number'] {
  height: 32px;
  border: 1px solid #323232;
  border-radius: 5px;
  text-align: center;
  font-family: 'Lato', sans-serif;
  font-weight: 600;
}
.option input[type='number'].timer-input {
  width: 32px;
  margin-right: 5px;
}
.option input[type='number'].bpm-input {
  width: 25%;
}
</style>
