'use strict'

var numSheep = 4

for(var month = 1; month < 13; month++) {
  // Console output of sheep before cut
  console.log('Sheep at begining of month ' + month + ': ' + numSheep)

  if (numSheep >= 10000) {
    // remove 50%
    numSheep = numSheep - (numSheep * .5)
  } else if (month == 4) {
    // remove 75%
    numSheep = numSheep - (numSheep * .75)
  }

  // Console Output of sheep count after cut
  console.log('Sheep at end of month ' + month + ' (after cut): ' + numSheep)

  // for next month
  // sheep X 4 each month
  numSheep *= 4
}
