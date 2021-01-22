const removeRepeated = require('./utils').removeRepeated

/**
 *
 * @param {string|object|Array} data
 * @returns {Array.<string>}
 */
module.exports = function deepKeywordsText(data) {
  if (data === null || data === undefined)
    throw new Error("`data` can't be null!")
  if (!data) return []

  /** @type {string} */
  let text = data.toString()
  text = text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/gm, '')
  text = text.replace(/[^a-z0-9\-\s\.]/gm, '')

  let list = text
    .split(/\s+/g)
    .filter(removeRepeated)
    .map((s) => s.replace(/^\./, '').replace(/\.$/, ''))

  return list
}
