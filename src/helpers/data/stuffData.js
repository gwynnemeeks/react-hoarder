import axios from 'axios';

import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getItemsByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/items.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      const allItems = response.data;
      const myStuff = [];

      if (allItems) {
        Object.keys(allItems).forEach((itemId) => {
          const item = allItems[itemId];
          item.id = itemId;
          myStuff.push(item);
        });
      }

      resolve(myStuff);
    })
    .catch((err) => reject(err));
});

export default { getItemsByUid };
