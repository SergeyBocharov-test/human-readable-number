module.exports = function toReadable (number) {
  const zeroToNineteen = ('zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen').split(', ')
  const twentyToNinety = ('twenty, thirty, forty, fifty, sixty, seventy, eighty, ninety').split(', ')
  const dozens = ('hundred, thousand, million, billion').split(', ')
  if (+number <= 19) {
    return zeroToNineteen[number]
  } else {
    const n = number.toString().split('')
    switch(number.toString().length){
      case 2:
          return `${twentyToNinety[n[0] - 2] + (n[1] > 0 ? ' ' + zeroToNineteen[n[1]] : '')}`
        break
      case 3:
        const sumBelow100 = n[1] + n[2]
        return `${zeroToNineteen[n[0]]} ${dozens[0]}${+sumBelow100 === 0 ? '' : +sumBelow100 <= 19 ? ' ' + zeroToNineteen[+sumBelow100] : ' ' + twentyToNinety[n[1] - 2] + (n[2] > 0 ? ' ' + zeroToNineteen[n[2]] : '')}`
        break
      default:
        return (
        `v['_']v this function, probably, can be done in a better way and developed further.
        My implementation is hard to read, but it works. Sorry.`
        )
        break
    } 
  }
}
