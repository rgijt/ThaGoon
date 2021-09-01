import { get } from 'idb-keyval';

async function getSettings() {
  let settings = null;

  // Check indexenDB if user settings are available
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

  // Return settings if not null
  if (settings !== null) return settings;

  // TODO;
  // Replace default value and make a real call
  // Alleen juiste url plaatsen en then functie fixen.
  // Check API if user settings are available
  await fetch('../../data/api.json', {
    method: 'get',
  })
    .then((e) => {
      //settings = e;
      settings = {
        Timer: null,
        Recording: false,
        Metronome: null,
      };
      console.log('Not Important', e);
    })
    .catch((e) => {
      console.error(
        'Something went wrong when getting your user settings from our API...',
        e
      );
    });

  return new Promise((res) => {
    res(settings);
  });
}

export default getSettings;
