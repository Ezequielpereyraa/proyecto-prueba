export const getApi = {
  get: () =>{
    return fetch('https://api.imgflip.com/get_memes')
      .then(response => response.json())
      .catch(error => console.log(error));
  }
};