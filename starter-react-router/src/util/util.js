export const ObjectUtils = {
  empty: (object) => !object,
  sort: (getValue) => (a, b) => {
    if (getValue(a) > getValue(b)) {
      return 1;
    }
    if (getValue(a) < getValue(b)) {
      return -1;
    }
    return 0;
  },
};
