async function getWordList() {
  let wordList = null;

  // TODO;
  // Replace default value and make a real call
  // Alleen juiste url plaatsen en then functie fixen.
  // Check API if user settings are available
  await fetch('../../data/api.json', {
    method: 'get',
  })
    .then((e) => {
      // wordList = e;
      wordList = [
        'Stacks',
        'Ice',
        'Cap',
        'Grass',
        'Tree',
        'Cheddar',
        'Airplane',
        'Sticky',
        'Monkey',
        'Respect',
        'Heavy',
        'Big',
        'Yesterday',
      ];
      console.log('Not Important', e);
    })
    .catch((e) => {
      console.error(
        'Something went wrong when getting your user settings from our API...',
        e
      );
    });

  return new Promise((res) => {
    res(wordList);
  });
}
export default getWordList;
