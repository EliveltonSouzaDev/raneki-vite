export function serialize(obj) {
  let queryString = '';
  for (const key in obj) {
    if (key) {
      queryString += `&${key}=${obj[key]}`;
    }
  }
  return queryString;
}
