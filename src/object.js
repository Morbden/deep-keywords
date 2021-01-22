const removeRepeated = require('./utils').removeRepeated
const textKeywords = require('./text')

/**
 *
 * @param {object} data
 * @param {Array.<string>} data
 * @returns {Array.<string>}
 */
module.exports = function objectKeywords(data, fields = []) {
  if (data === null || data === undefined)
    throw new Error("`data` can't be null!")
  if (typeof data !== 'object') throw new Error('`data` have be a Object!')
  if (!data) return []

  /** @type {Array.<string>} */
  let list = []

  fields.forEach(
    /**
     *
     * @param {string} field
     */
    (field) => {
      const fs = field.split('.')
      let value = data
      for (let i = 0; i < fs.length; i++) {
        value = value[fs[i]] || null
        if (value === null) {
          value = null
          break
        }
      }
      if (value !== null) {
        list.push(...textKeywords(value.toString()))
      }
    },
  )
  return list.flat(Infinity).filter(removeRepeated)
}
