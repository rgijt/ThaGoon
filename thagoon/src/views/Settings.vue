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
      <w-flex wrap class="column option-wrapper">
        <div v-if="this.gameSettings != null">
          <span class="xs12 option-title">Ingame</span>
          <w-flex wrap class="align-center option">
            <span class="xs4">Timer</span>
            <w-switch
              class="xs4 justify-center"
              :model-value="this.gameSettings.UseTimer"
              v-model="this.gameSettings.UseTimer"
              @change="this.updateSettings()"
            >
            </w-switch>
            <div class="number-input xs4">
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
          </w-flex>

          <w-flex wrap class="align-center option">
            <span class="xs4">Recording</span>
            <div class="xs4"></div>
            <w-switch
              class="xs4 justify-center"
              :model-value="this.gameSettings.UseRecording"
              v-model="this.gameSettings.UseRecording"
              @change="this.updateSettings()"
            ></w-switch>
          </w-flex>

          <w-flex wrap class="align-center option">
            <span class="xs4">Metronome</span>
            <w-switch
              class="xs4 justify-center"
              :model-value="this.gameSettings.UseMetronome"
              v-model="this.gameSettings.UseMetronome"
              @change="this.updateSettings()"
            ></w-switch>
            <div class="number-input xs4">
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
          </w-flex>

          <w-flex wrap class="align-center option">
            <span class="xs4">Animation</span>
            <w-switch
              class="xs4 justify-center"
              :model-value="this.gameSettings.UseAnimation"
              v-model="this.gameSettings.UseAnimation"
              @change="this.updateSettings()"
            ></w-switch>
            <w-select
              :items="this.animationSelection"
              :no-unselect="true"
              :model-value="this.gameSettings.AnimationSpeed"
              v-model="this.gameSettings.AnimationSpeed"
              @change="this.updateSettings()"
              class="xs4"
            ></w-select>
          </w-flex>
        </div>
        <div v-if="this.userDetail != null">
          <span class="xs12 option-title">User</span>
          <w-flex wrap class="align-center column option">
            <w-flex wrap class="xs6 justify-center">
              <w-image
                class="bd1 bdrsr sh1"
                :width="96"
                :height="96"
                :src="this.userDetail.ProfileImageUrl"
              >
              </w-image>
            </w-flex>
            <a href="javascript:void(0);" class="btn" @click="this.UploadImage"
              >Change Image</a
            >
            <input
              style="display: none"
              type="file"
              ref="ImageUploader"
              accept="image/*"
              @change="this.ChangeProfileImageUrl"
            />
          </w-flex>
          <w-flex wrap class="align-center option">
            <span class="xs6">Username</span>
            <w-input
              class="xs6"
              v-model="this.userDetail.Username"
              @change="this.updateUser()"
            >
            </w-input>
          </w-flex>
          <w-flex wrap class="align-center option text-center">
            <a
              href="javascript:void(0);"
              class="logout-btn xs12"
              @click="this.LogOut()"
              >Logout</a
            >
          </w-flex>
        </div>
      </w-flex>
    </div>
  </div>
</template>
<script>
import router from '../router/index';
import getUser from '../logic/getUser';
import setUser from '../logic/setUser';
import { ref } from 'vue';

import settings from '../logic/settings';

export default {
  name: 'Settings',
  methods: {
    updateSettings: function() {
      console.log(this.gameSettings);
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
    const ImageUploader = ref(null);
    const gameSettings = ref(null);
    const userDetail = ref(null);
    const animationSelection = [
      { label: 'Slow', value: 0.8 },
      { label: 'Normal', value: 0.5 },
      { label: 'Fast', value: 0.2 },
    ];

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

    // PUBLIC METHODS
    const UploadImage = function() {
      ImageUploader.value.click();
    };
    const ChangeProfileImageUrl = async function(e) {
      const file = e.target.files[0];
      const reader = new FileReader();

      let DataUrl = reader.readAsDataURL(file);
      console.log(DataUrl);
      reader.onload = (e) => {
        userDetail.value.ProfileImageUrl = e.target.result;
      };
    };
    const LogOut = function() {
      router.push('/login');
    };

    return {
      ImageUploader,
      gameSettings,
      userDetail,
      animationSelection,
      ChangeProfileImageUrl,
      UploadImage,
      LogOut,
    };
  },
};
</script>
<style scoped>
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

.main {
  font-weight: 600;
  display: block;
  margin: 0 20px 45px 20px;
  overflow-y: scroll;
}

.option-wrapper {
  text-align: start;
}
.option-title {
  color: #3c3c3c;
  font-size: 1.2em;
  font-style: italic;
}
.option {
  margin: 30px 10px !important;
}

.option input[type='number'] {
  height: 32px;
  border: 1px solid #323232;
  border-radius: 5px;
  text-align: center;
  font-family: 'Lato', sans-serif;
  font-weight: 600;
}
.option input[type='number'].timer-input[data-v-53cc84dd] {
  width: 75%;
  margin-right: 10px;
}
.option input[type='number'].bpm-input[data-v-53cc84dd] {
  width: 100%;
}

/* USER SETTINGS */

.upload-btn {
  background: #ff5a5f;
  color: #ffffff;
  padding: 10px;
  border-radius: 5px;
  text-transform: uppercase;
  margin: 20px 0;
}

.option .logout-btn {
  color: #3c3c3c;
  font-family: 'Lato', sans-serif;
  font-size: 1em;
  text-decoration: underline;
}
</style>
