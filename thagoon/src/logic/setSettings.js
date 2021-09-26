import { set } from 'idb-keyval';

async function setSettings(
  newTimer,
  newUseTimer,
  newUseRecording,
  newMetronome,
  newUseMetronome,
  saveToApi
) {
  let result;
  let settings = {
    timer: newTimer,
    useTimer: newUseTimer,
    useRecording: newUseRecording,
    metronome: newMetronome,
    useMetronome: newUseMetronome,
  };

  // Set gameSettings in indexenDB (local)
  await set('settings', settings)
    .then(() => {
      result = true;
    })
    .catch((e) => {
      console.error(
        'Something went wrong when setting your user settings from your indexenDB...',
        e
      );
      result = false;
    });

  // TODO;
  // Replace default value and make a real call
  // Alleen juiste url plaatsen en then functie fixen.
  // Set gameSettings in our API
  if (saveToApi) {
    await fetch('../../data/api.json', {
      method: 'post',
      body: settings,
    })
      .then(() => {
        result = true;
      })
      .catch((e) => {
        console.error(
          'Something went wrong when setting your user settings in our API...',
          e
        );
        result = false;
      });
  }

  return new Promise((res) => {
    res(result);
  });
}

export default setSettings;
