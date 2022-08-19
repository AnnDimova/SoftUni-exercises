function getSequenceSum(i, j, k) {
    let sum = i;
    for (let index = i + 1; index <= j; index++) {
      sum += index;
    }
    for (let index = j - 1; index >= k; index--) {
      sum += index;
    }
    console.log(sum);
  }
  
  getSequenceSum(5, 9, 6)