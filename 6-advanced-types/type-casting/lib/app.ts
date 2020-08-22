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