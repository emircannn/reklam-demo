
export const saveLocalStorage = async (key, value) => {
    try {
      await localStorage.setItem(key, value);
      console.log(`Veri LocalStorage Kaydedildi: ${key} - ${value}`);
    } catch (error) {
      console.error(`Kayıt Hatası: ${key} - ${value}`, error);
    }
  };

  export const getLocalStorage = async (key) => {
    try {
      const value = await JSON.stringify(localStorage.getItem(key));;
      const parsValue = JSON.parse(value);
      console.log(`Veri LocalStorage'den Çekildi: ${key} - ${JSON.parse(parsValue)}`);
      return parsValue;
    } catch (error) {
      console.error(`Veri Çekme Hatası: ${key}`, error);
      return null;
    }
  };