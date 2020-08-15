
abstract class Department {
  private employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
  }

  abstract describe(this: Department) : void;

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
  admins: string[];
  constructor(id: string,  admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }

  describe() {
    console.log('IT Department - ID: ' + this.id);
  }
}

const it = new ITDepartment("d1", ['Lawrence']);

it.addEmployee("Julie");

it.describe(); 
it.printEmployeeInformation();

