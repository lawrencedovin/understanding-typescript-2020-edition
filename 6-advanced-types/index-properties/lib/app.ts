interface Bird {
  type: 'bird';
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch(animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
      break;
  }
  console.log(`Moving at speed ${speed}`);
}

moveAnimal({type: 'bird', flyingSpeed: 10});

// const userInput = <HTMLInputElement>document.querySelector("#user-input");
// TypeScript knows that after the <HTMLInputElement>
// will be an HTML Input Element 
const userInput = document.querySelector("#user-input")! as HTMLInputElement;
// Use this to avoid conflict with React's <> brackets
userInput.value = 'Hi there';

interface ErrorContainer { 
// { email: 'Not a valid email', username: 'Must start with a character'}
  [property: string]: string;
  // Don't know the exact property name,
  // Also don't know the property value
  // I just know every property added to this object ErrorContainer
  // Must have a property name of string and the value must be string.
}

const errorBag: ErrorContainer = {
  email: 'Not a valid email',
  username: 'Must start with a capital character'
};