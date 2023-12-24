import { colorsArr } from "../constants/data";

export const debounce = (func, delay) => {
  let timeout;

  return function executedFunction(...args) {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      clearTimeout(timeout);
      func(...args);
    }, delay);
  };
};

export const cardColor = (text) =>
  colorsArr.find((obj) => obj.type === text).color;
