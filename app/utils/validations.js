const passwordRegex = new RegExp(
  '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})',
); // eslint-disable-line no-useless-escape
export const required = (value) => !value;

export const isValidEmail = (value) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);

export const website = (value) =>
  !value ||
  !/^(https?\:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})(\/[\w]*)*$/i.test(value); // eslint-disable-line

export const password = (value) => !value || !passwordRegex.test(value);

export const nic = (value) => !value || value.length < 15;

export const isValidName = (name) => {
  const re = /^[_A-z]*((-|\s)*[_A-z])*$/g;
  return re.test(String(name).toLowerCase());
};

export const isEmpty = (value) => {
  if (value === null || value === undefined || value === '') {
    return true;
  }
  return false;
};

export const isValidNumber = (number) => /^0[\d]{8,10}$/i.test(number);

export const isValidCNIC = (number) => /^\d{13}$/i.test(number);

export function isInt(n) {
  return Number(n) === n && n % 1 === 0;
}
