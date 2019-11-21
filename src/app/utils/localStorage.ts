export function setLocalStore(key: string, val: string) {
  window.localStorage.setItem(key, JSON.stringify(val));
}

export function getLocalStore(key: string) {
  const data = window.localStorage.getItem(key);
  if (data != null) {
    return JSON.parse(data);
  }
  return null;
}

export function removeLocalStore(key: string) {
  window.localStorage.removeItem(key);
}

export function clearAllLocalStore(key: string) {
  window.localStorage.clear();
}