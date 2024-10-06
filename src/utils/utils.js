export function setLocalStorage(key, value) {
  const stringJSON = JSON.stringify(value);
  localStorage.setItem(key, stringJSON);
}
export function getLocalStorage(key) {
  let dataLocal = localStorage.getItem(key);
  return dataLocal ? JSON.parse(dataLocal) : null;
}
