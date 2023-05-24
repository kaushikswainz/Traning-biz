function findLeapYears(startYear, endYear) {
    const leapYears = [];
    for (let year = startYear; year <= endYear; year++) {
      if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        leapYears.push(year);
      }
    }
    return leapYears;
  }
  
  console.log(findLeapYears(2000, 2022)); 