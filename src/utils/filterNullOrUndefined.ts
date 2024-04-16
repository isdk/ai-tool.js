export function filterNullOrUndefined(obj: any) {
  return Object.keys(obj).reduce((acc, key) => {
    const value = obj[key];
    if (value != null) {
      acc[key] = value;
    }
    return acc;
  }, {})
}