export default (amount, unit) => {
  switch (unit) {
    case 'p':
      return amount * Math.pow(10, -12)
      break
    case 'n':
      return amount * Math.pow(10, -9)
      break
    case 'u':
      return amount * Math.pow(10, -6)
      break
    case 'm':
      return amount * Math.pow(10, -3)
      break
    case 'K':
      return amount * Math.pow(10, 3)
      break
    case 'M':
      return amount * Math.pow(10, 6)
      break
    case 'G':
      return amount * Math.pow(10, 9)
      break
    case 'T':
      return amount * Math.pow(10, 12)
      break
    default:
      return amount
  }
}
