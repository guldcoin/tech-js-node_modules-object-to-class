module.exports = (obj, name = 'ObjectToClass') => {
  const n = class {}
  for (var p in obj) {
    n.prototype[p] = obj[p]
  }
  Object.defineProperty(n, 'name', {value: name})
  return n
}
