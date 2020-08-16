interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named {
  readonly name?: string;
  outputName?: string;

  bye?(phrase: string): void;
}

interface Greetable extends Named{
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;
  age: 30;

  constructor(name?: string) {
    if(name) {
      this.name = name;
    }
  }

  greet(phrase: string) {
    if(this.name) {
      console.log(phrase + ' ' + this.name);
    } else {
      console.log(phrase);
    }
  }
}

let user1 = new Person('Lawrence');

user1.greet('Hi there I am');