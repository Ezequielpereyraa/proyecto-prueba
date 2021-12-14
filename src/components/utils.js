export const getApi = {
  get: () =>{
    return fetch('https://api.imgflip.com/get_memes')
      .then(response => response.json())
      .catch(error => console.log(error));
  }
};

export const localStorageFun = (key, value) =>{
  if(key, value) {
    const storage = JSON.stringify(value);
    localStorage.setItem(key, storage);
  }else if(key) {
    const data = localStorage.getItem(key);
    return data && data.length ? JSON.parse(data) : [];
  }else {
    localStorage.clear();
  }
};