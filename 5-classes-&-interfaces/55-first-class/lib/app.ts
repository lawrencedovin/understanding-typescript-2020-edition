
class Department {
  name: string;

  constructor(nameInput: string) {
    this.name = nameInput;
  }
}

const accounting = new Department("Accounting");
console.log(accounting.name); 