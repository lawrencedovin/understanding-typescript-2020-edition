
class Department {
  name: string;

  constructor(nameInput: string) {
    this.name = nameInput;
  }

  describe(this: Department) {
    console.log("Department: " + this.name);
  }
}

const accounting = new Department("Accounting");
accounting.describe(); 