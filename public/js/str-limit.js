function strLimit(str, num) {
  return str.length > num ? `${str.slice(0, num)}...` : str;
}

module.exports = strLimit;
