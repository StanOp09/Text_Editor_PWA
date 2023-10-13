// import { openDB } from 'idb';

// const initdb = async () =>
//   openDB('jate', 1, {
//     upgrade(db) {
//       if (db.objectStoreNames.contains('jate')) {
//         console.log('jate database already exists');
//         return;
//       }
//       db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
//       console.log('jate database created');
//     },
//   });

// // TODO: Add logic to a method that accepts some content and adds it to the database
// export const putDb = async (content) => console.error('putDb not implemented');

// // TODO: Add logic for a method that gets all the content from the database
// export const getDb = async () => console.error('getDb not implemented');

// initdb();

// ***************

import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// Function to add content to the database
export const putDb = async (content) => {
  const jateDb = await openDB('jate', 1);

  const tx = jateDb.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  const result = await store.put({ id: 1, value: content });

  // Add the content to the database
  // const id = await store.add(content);
  // await tx.done;

  console.log(`Content with ID ${id} added to the database`);
};

// Function to get all content from the database
export const getDb = async () => {
  const jateDb = await openDB('jate', 1);

  const tx = jateDb.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  const result = await store.get(1);
  result ? console.log('Data from database:', result.value) : console.log('Data does not exist in database.');
  return result?.value;
  // Retrieve all content from the database
  // const contentArray = await store.getAll();

  // await tx.done;

  // return contentArray;
};

initdb();
