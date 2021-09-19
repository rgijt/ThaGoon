async function getScoresList(amount, currentAmount) {
  let scoresList = null;
  let postOptions = {
    Amount: amount,
    CurrentAmount: currentAmount,
  };
  console.log(postOptions);
  // TODO;
  // Replace default value and make a real call
  // Alleen juiste url plaatsen en then functie fixen.
  // Check API if user settings are available
  await fetch('../../data/api.json', {
    method: 'post',
  })
    .then((e) => {
      // scoreList = e;
      if (currentAmount < 40) {
        scoresList = [
          { image: '', time: '00:04:32', count: 9 },
          { image: '', time: '00:03:12', count: 6 },
          { image: '', time: '00:08:56', count: 12 },
          { image: '', time: '00:04:32', count: 9 },
          { image: '', time: '00:04:32', count: 9 },
          { image: '', time: '00:03:12', count: 6 },
          { image: '', time: '00:08:56', count: 12 },
          { image: '', time: '00:04:32', count: 9 },
          { image: '', time: '00:08:56', count: 12 },
          { image: '', time: '00:04:32', count: 9 },
        ];
      } else {
        scoresList = null;
      }
      console.log('Not Important', e);
    })
    .catch((e) => {
      console.error(
        'Something went wrong when getting the scores from our API...',
        e
      );
    });

  return new Promise((res) => {
    res(scoresList);
  });
}
export default getScoresList;
