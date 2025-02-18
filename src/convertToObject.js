'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  return sourceString
    .split(';') // Розділяємо по крапці з комою
    .map((rule) => rule.trim()) // Обрізаємо пробіли на початку і в кінці кожного правила
    .filter((rule) => rule) // Видаляємо порожні елементи
    .reduce((acc, rule) => {
      const [property, ...valueParts] = rule.split(':'); // Розділяємо тільки по першій двокрапці
      if (property) {
        // З'єднуємо частини значення назад у рядок, зберігаючи багаторядковість
        const value = valueParts.join(':').trim();
        acc[property.trim()] = value;
      }
      return acc;
    }, {});
}

module.exports = convertToObject;
