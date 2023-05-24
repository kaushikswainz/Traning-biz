var number = 12345;
var reverse = 0;
var remainder = 0;
  
while (number !== 0) {
    remainder = number % 10;
    reverse = (reverse* 10) + remainder;
    number = Math.floor(number / 10);
    }
  
console.log(reverse);