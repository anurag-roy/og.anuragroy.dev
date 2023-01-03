export const toTitleCase = (str: string) => {
  return str.replace(/(^|\s)\S/g, function (t) {
    return t.toUpperCase();
  });
};

export const classNames = (...classes: (string | boolean)[]) => {
  return classes.filter(Boolean).join(' ');
};
