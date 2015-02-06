var startOfDay = require('./start_of_day');
var startOfMonth = require('./end_of_month');

/**
 * Is passed date first day of month?
 * @param {date|string} dirtyDate
 * @returns {boolean}
 */
var isFirstDayOfMonth = function(dirtyDate) {
  return new Date(dirtyDate).getDate() == 1;
};

module.exports = isFirstDayOfMonth;


