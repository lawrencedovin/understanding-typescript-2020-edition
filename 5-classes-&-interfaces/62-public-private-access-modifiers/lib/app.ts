
class Department {
  public name: string;
  private employees: string[] = [];

  constructor(nameInput: string) {
    this.name = nameInput;
  }

  describe(this: Department) {
    console.log("Department: " + this.name);
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

const accounting = new Department("Accounting");

accounting.addEmployee("Lawrence");
accounting.addEmployee("Julie");

//accounting.employees[2] = "Anna";
// gives error because you can only alter the array using a method due to private keyword modifier

accounting.describe(); 
accounting.name = "NEW NAME DEPARTMENT";
accounting.printEmployeeInformation();

