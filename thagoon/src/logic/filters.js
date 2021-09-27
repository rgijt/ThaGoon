export default {
  ZeroPrefix(num) {
    let zero = '';
    let digit = num.toString().length > 2 ? 3 : 2;
    for (let i = 0; i < digit; i++) {
      zero += '0';
    }
    return (zero + num).slice(-digit);
  },
  StopwatchTime(time) {
    return `${this.ZeroPrefix(time.Hours)}:${this.ZeroPrefix(
      time.Minutes
    )}:${this.ZeroPrefix(time.Seconds)}`;
  },
};
