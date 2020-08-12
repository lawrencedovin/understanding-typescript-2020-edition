
class Department {
  private employees: string[] = [];

  constructor(private id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`Department: (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string){
    // Validation etc.
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("d1", "Accounting");

accounting.addEmployee("Lawrence");
accounting.addEmployee("Julie");

//accounting.employees[2] = "Anna";
// gives error because you can only alter the array using a method due to private keyword modifier

accounting.describe(); 
accounting.name = "NEW NAME DEPARTMENT";
accounting.printEmployeeInformation();

