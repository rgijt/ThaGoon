import { get } from 'idb-keyval';

async function getUser() {
  let user = null;

  // Get user from indexedDB (local)
  await get('user')
    .then((e) => {
      user = e == undefined ? null : e;
    })
    .catch((e) => {
      console.error(
        'Something went wrong when getting user from indexenDB...',
        e
      );
    });

  // If user already filled skip api call
  if (user === null) {
    // TODO;
    // Replace default value and make a real call
    // Alleen juiste url plaatsen en then functie fixen.

    // Get user from our API
    await fetch('../../data/api.json', {
      method: 'get',
    })
      .then((e) => {
        //user = e;
        console.log('Not Important', e);
      })
      .catch((e) => {
        console.error(
          'Something went wrong when getting user from our API...',
          e
        );
      });
  }

  return new Promise((res) => {
    res({
      Id: 'e0ede1b6-4d53-4a48-b0d5-eb78a1011ceb',
      Username: 'Cabra',
      ProfileImageUrl:
        'https://iheartcraftythings.com/wp-content/uploads/2021/04/Goat-DRAWING-%E2%80%93-STEP-10.jpg',
      Token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiZXhwaXJlRGF0ZSI6MTUxNjIzOTAyMn0.jcGejDbnTAO6oDpq-DpkwSlZfzzsLqtpc5TqdMm6Nc0',
    });
  });
}

export default getUser;
