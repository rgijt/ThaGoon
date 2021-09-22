import { set } from 'idb-keyval';

async function setUser(id, username, profileImageUrl, token, saveToApi) {
  let result;
  let user = {
    Id: id,
    Username: username,
    ProfileImageUrl: profileImageUrl,
    Token: token,
  };

  // Set gameSettings in indexenDB (local)
  await set('user', user)
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
      body: user,
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

export default setUser;
