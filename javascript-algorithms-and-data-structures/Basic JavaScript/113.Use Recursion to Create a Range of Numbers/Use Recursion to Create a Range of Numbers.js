function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum) {
    return [];
  } else {
    const a = rangeOfNumbers(startNum, endNum - 1);
    a.push(endNum);
    return a;
  }
}
