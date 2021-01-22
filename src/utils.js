/**
 * Filter to remove matching elements within a string list.
 * Also removes strings that are less than 2 in length.
 *
 * @param {string} el
 * @param {number} index
 * @param {Array.<string>} list
 *
 * @returns {boolean}
 */
function removeRepeated(el, index, list) {
  if (!el || el.length < 2) return false
  return list.indexOf(el) === index
}

module.exports = {
  removeRepeated,
}
