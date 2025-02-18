'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  return sourceString
    .split(';')
    .map((el) => el.trim())
    .filter((el) => el)
    .reduce((acc, el) => {
      const [property, ...values] = el.split(':');
      if (property) {
        const value = values.join(':').trim();
        acc[property.trim()] = value;
      }
      return acc;
    }, {});
}

module.exports = convertToObject;
