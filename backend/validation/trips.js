const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateTripInput(data) {
  let errors = {};

  data.country = !isEmpty(data.country) ? data.country : '';

  if (Validator.isEmpty(data.country)) {
    errors.country = 'Country is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
