
class Department {
  protected employees: string[] = [];

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

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
  }

  addEmployee(employee: string) {
    if (employee === 'Lawrence') {
      return;
    }
    this.employees.push(employee);
    // Adds an Employee if not Lawrence
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

const accounting = new AccountingDepartment('d2', []);

accounting.addReport("Lawrence is still pogi.");
accounting.addEmployee("Lawrence");
accounting.addEmployee("Lawrence");

accounting.printEmployeeInformation();
accounting.printReports();
