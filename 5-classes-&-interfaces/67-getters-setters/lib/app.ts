
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
  private lastReport: string;

  get mostRecentReport() {
    if(this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Please pass in a valid value');
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
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
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const accounting = new AccountingDepartment('d2', []);

accounting.addReport("Lawrence is still pogi.");

console.log(accounting.mostRecentReport);

accounting.mostRecentReport = "Year End Report";

accounting.printReports();
