
window.onload = function() {

  const add = (a:number, b: number = 1) => a + b;

  const printOutput: (a: number | string) => void = output => console.log(output);

  const button = document.querySelector('button');

  if(button) {
    button.addEventListener('click', (output) => {console.log(output)});
  }

  printOutput(add(5));

  const hobbies = ['Sports', 'Cooking'];
  const activeHobbies = ['Hiking'];

  activeHobbies.push(...hobbies);

  const person = {
    name: 'Lawrence',
    age: 27
  }

  const person2 = {...person};

}