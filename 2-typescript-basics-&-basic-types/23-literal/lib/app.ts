window.onload = function() {
  function combine(
    input1: number | string, 
    input2: number | string, 
    resultConversion: 'as-number' | 'as-text'
    ) {
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
      result = +input1 + +input2;
    } else {
      result = input1.toString() + input2.toString();
    }

    return result;
  }

  const combineAges = combine(30, 26, 'as-number');
  console.log(combineAges);

  const combinedStringAges = combine(30, 26, 'as-text');
  console.log(combinedStringAges);

  const combineNames = combine('max', 'anna', 'as-text');
  console.log(combineNames);
}