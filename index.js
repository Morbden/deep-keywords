/**
 *
 * @param {string|object|Array} data
 * @returns {Array.<string>}
 */
module.exports = function deepKeywords(data) {
  if (!data) throw new Error("`data` can't be null!")

  if (Array.isArray(data)) return data.map(deepKeywords).flat(Infinity)
  else if (typeof data === 'object')
    return Object.values(data).map(deepKeywords).flat(Infinity)

  /** @type {string} */
  let text = data.toString()
  text = text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/gm, '')
  text = text.replace(/[^a-z0-9\s]/gm, '')

  let list = text.split(/\s+/g).filter((el, index, list) => {
    if (!el || el.length < 2) return false
    return list.indexOf(el) === index
  })

  return list
}