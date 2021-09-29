import localStorage from './localStorage';
import api from './api';

// GetGameSettings
const GetGameSettings = async function() {
  let GameSettings = null;

  await localStorage
    .Get('gameSettings')
    .then((e) => {
      if (e != undefined) {
        GameSettings = JSON.parse(e);
      }
    })
    .catch((ex) => {
      console.log(ex);
    });

  if (GameSettings == null) {
    await api
      .Get('http://GetGameSettings.nl/id')
      .then((e) => {
        if (e != undefined) {
          GameSettings = JSON.parse(e);
        }
      })
      .catch((ex) => {
        console.log(ex);
      });
  }
  return GameSettings;
};

const SetGameSettings = async function(gameSettings) {
  let apiSuccesfull;
  let result = false;
  let valid = true;

  // Validate gameSettings
  if (gameSettings == null || gameSettings == undefined) return false;
  valid =
    gameSettings.Timer != undefined && typeof gameSettings.Timer == 'number';
  if (!valid) return false;
  valid =
    gameSettings.UseTimer != undefined &&
    typeof gameSettings.UseTimer == 'boolean';
  if (!valid) return false;
  valid =
    gameSettings.UseRecording != undefined &&
    typeof gameSettings.UseRecording == 'boolean';
  if (!valid) return false;
  valid =
    gameSettings.Metronome != undefined &&
    typeof gameSettings.Metronome == 'number' &&
    gameSettings.Metronome > 79 &&
    gameSettings.Metronome < 121;
  if (!valid) return false;
  valid =
    gameSettings.UseMetronome != undefined &&
    typeof gameSettings.UseMetronome == 'boolean';
  if (!valid) return false;

  // Save gameSettings in DB
  await api
    .Post('http://SetGameSettings.nl/id', gameSettings)
    .then((e) => {
      console.log(e);
      apiSuccesfull = true;
    })
    .catch((ex) => {
      console.log(ex);
      apiSuccesfull = false;
    });

  // If gameSettings is set in DB than also in localStorage
  if (apiSuccesfull)
    result = await localStorage.Set(
      'gameSettings',
      JSON.stringify(gameSettings)
    );

  return result;
};

export default {
  GetGameSettings,
  SetGameSettings,
};
