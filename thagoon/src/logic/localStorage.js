import { get, set } from 'idb-keyval';

const Get = async function(key) {
  let result;
  await get(key)
    .then((e) => {
      result = e;
    })
    .catch((ex) => {
      console.log(ex);
    });
  return result;
};

const Set = async function(key, value) {
  let result;
  await set(key, value)
    .then(() => {
      result = true;
    })
    .catch((ex) => {
      console.log(ex);
      result = false;
    });
  return result;
};

export default {
  Get,
  Set,
};
