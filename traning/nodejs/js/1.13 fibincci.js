function fibonacci(num) {
    if (num <= 1) return 1;
  
    let fibArr = [0, 1];
    for (let i = 2; i <= num; i++) {
      fibArr[i] = fibArr[i - 1] + fibArr[i - 2];
    }
  
    return fibArr;
  }
  
  console.log(fibonacci(5));