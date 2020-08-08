
window.onload = function() {

  const hobbies = ['Sports', 'Cooking'];
  const activeHobbies = ['Hiking'];

  activeHobbies.push(...hobbies);

  const person = {
    name: 'Lawrence',
    age: 27
  }

  const person2 = {...person};

  const add = (...numbers: number[]) => {
    numbers.reduce((curResult, curValue) => {
      return curResult + curValue;
    }, 0);
  };

  const sum = arr => arr.reduce((a,b) => a + b, 0);
  // Sum is equal to an arr input which outputs
  // the array's sum of values using reduce which combines all values
  // into 1 single value.

}