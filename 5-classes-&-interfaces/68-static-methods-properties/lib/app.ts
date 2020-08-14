
class Department {
  static fiscalYear = 2020;
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
  }

  static createEmployee(name: string) {
    return {name: name};
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

const lawrenceEmployee = Department.createEmployee("lawrence");
console.log(lawrenceEmployee);
// {name: 'Lawrence'}

console.log(Department.fiscalYear);