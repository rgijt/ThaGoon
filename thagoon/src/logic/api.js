// headers: {
//   Accept: 'application/json, text/plain, */*',
//   'Content-Type': 'application/json',
//   Authorization: 'Bearer ${inMemoryToken}',
// },

const validateUrl = function(url) {
  return url != null && url != undefined && typeof url == 'string';
};

const Get = async function(url) {
  let result;

  // Validate
  if (!validateUrl(url)) return;

  await fetch(url, {
    method: 'GET',
  })
    .then((e) => {
      result = e;
    })
    .catch((ex) => {
      console.log(ex);
    });
  return result;
};

const Post = async function(url, body) {
  let result;

  // Validate
  if (!validateUrl(url)) return;

  await fetch(url, {
    method: 'POST',
    body: body,
  })
    .then((e) => {
      result = e;
    })
    .catch((ex) => {
      console.log(ex);
    });
  return result;
};

export default {
  Get,
  Post,
};
