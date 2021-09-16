const { kebabCase } = require('lodash');

module.exports = (targetVal) => {
  let sanitizedVal = targetVal
    .replace(/\{.*\}/g, '')
    .replace(/\/+/g, '-')
    .substr(1);

  if (sanitizedVal.endsWith('-')) {
    sanitizedVal = sanitizedVal.substr(0, sanitizedVal.length - 1);
  }

  if (kebabCase(sanitizedVal) !== sanitizedVal) {
    return [{ message: 'Path should be kebab-cased.'}];
  }

  return undefined;
};
