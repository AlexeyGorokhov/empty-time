'use strict';

module.exports = emptyTime;

function emptyTime (dt) {
  if (!dt instanceof Date) return;
  dt.setHours(0, 0, 0, 0);
}

emptyTime.toDayEnd = function (dt) {
  if (!dt instanceof Date) return;
  dt.setHours(23, 59, 59, 999);
};
