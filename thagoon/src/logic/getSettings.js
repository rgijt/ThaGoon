import { get } from 'idb-keyval';

async function getSettings() {
  let settings = null;

  // Get user gameSettings from indexedDB (local)
  await get('settings')
    .then((e) => {
      settings = e == undefined ? null : e;
    })
    .catch((e) => {
      console.error(
        'Something went wrong when getting your user settings from your indexenDB...',
        e
      );
    });

  // If settings already filled skip api call
  if (settings === null) {
    // TODO;
    // Replace default value and make a real call
    // Alleen juiste url plaatsen en then functie fixen.

    // Get user gameSettings from our API
    await fetch('../../data/api.json', {
      method: 'get',
    })
      .then((e) => {
        //settings = e;
        // settings = {
        //   timer: 10,
        //   useTimer: true,
        //   useRecording: false,
        //   metronome: 120,
        //   useMetronome: false,
        // };
        console.log('Not Important', e);
      })
      .catch((e) => {
        console.error(
          'Something went wrong when getting your user settings from our API...',
          e
        );
      });
  }

  return new Promise((res) => {
    // If gameSettings isn't filled return default
    settings =
      settings != null
        ? settings
        : {
            timer: 5,
            useTimer: false,
            useRecording: false,
            metronome: 80,
            useMetronome: false,
          };
    res(settings);
  });
}

export default getSettings;
