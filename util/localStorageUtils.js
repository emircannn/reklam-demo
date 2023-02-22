import localforage from 'localforage';

export const saveDataToLocalStorage = async (key, value) => {
  try {
    await localforage.setItem(key, value);
    console.log(`Data saved to local storage: ${key} - ${value}`);
  } catch (error) {
    console.error(`Error saving data to local storage: ${key} - ${value}`, error);
  }
};

export const getDataFromLocalStorage = async (key) => {
  try {
    const value = await localforage.getItem(key);
    console.log(`Data retrieved from local storage: ${key} - ${value}`);
    return value;
  } catch (error) {
    console.error(`Error retrieving data from local storage: ${key}`, error);
    return null;
  }
};

export const clearLocalStorage = async () => {
    try {
      await localforage.clear();
      console.log('All data deleted from local storage.');
    } catch (error) {
      console.error('Error deleting data from local storage.', error);
    }
  };