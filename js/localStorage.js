// записывает данные в localstorage
function localStorage_set(local_set_key, val) {
    localStorage.setItem(local_set_key, JSON.stringify(val));
  }
  
  // получает данные из localstorage
  function get(key) {
    return JSON.parse(localStorage.getItem(key));
  }
  
  export { localStorage_set, get };
  