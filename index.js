'use strict';

module.exports = function () {
  return new Date();
};

function emptyTime (dt) {
  if (!dt instanceof Date) return;
  dt.setHours(0, 0, 0, 0);
}

emptyTime.toDayEnd = function (dt) {
  if (!dt instanceof Date) return;
  dt.setHours(23, 59, 59, 999);
};
