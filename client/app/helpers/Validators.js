import { strict } from "assert";
import { dateInput } from "../components/forms/Inputs";

export const required = v => {
  if (!v || v === "" || v.length === 0) {
    return "This field is required";
  }
  return undefined;
};

export const minLength = n => v => {
  if (v.length < n) {
    return "This field is not long enough";
  }
  return undefined;
};

export const minVal = n => v => {
  if (v < n) {
    return "This value is invalid";
  }
  return undefined;
};

export const maxVal = n => v => {
  if (v > n) {
    return "This value is invalid";
  }
  return undefined;
};

export const validRange = (min, max) => value => {
  if (value > max) {
    return "This value is too high";
  } else if (value < min) {
    return "This value is too low";
  } else {
    return undefined;
  }
};

export const isNumber = v => {
  if (isNaN(v)) {
    return "This field must be a number";
  }
  return undefined;
};

export const isFuture = v => {
  let now = new Date();
  let val = new Date(v);
  if (now > val) {
    return "This date must be in the future";
  }
  return undefined;
};

export const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined);
