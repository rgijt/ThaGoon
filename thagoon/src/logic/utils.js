const ZeroPrefix = (num, digit) => {
  let zero = '';
  for (let i = 0; i < digit; i++) {
    zero += '0';
  }
  return (zero + num).slice(-digit);
};

module.export = {
  ZeroPrefix,
};
