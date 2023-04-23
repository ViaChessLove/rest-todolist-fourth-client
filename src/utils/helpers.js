const compose = (...fns) => (args) => (
  fns.reduceRight((acc, cur) => cur(acc), args)
);

export {
  compose,
};
