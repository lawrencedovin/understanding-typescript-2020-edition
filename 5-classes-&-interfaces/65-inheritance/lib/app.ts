
class Department {
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
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

class ITDepartment extends Department{
  constructor(id: string, public admins: string[]) {
    super(id, 'IT');
  }
}

const it = new ITDepartment("d1", ['Lawrence']);

it.addEmployee("Julie");

it.describe(); 
it.printEmployeeInformation();

