
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
    private static instance: ITDepartment;
    // static means you don't instatiate a new ITDepartment Object
  
    private constructor(id: string,  admins: string[]) {
      super(id, 'IT');
      this.admins = admins;
    }
  
    static getInstance() {
      if (ITDepartment.instance) {
        return this.instance;
      }
      this.instance = new ITDepartment('d2', []);
      return this.instance;
    }
  
    describe() {
      console.log('IT Department - ID: ' + this.id);
    }
  }
  
  const it = ITDepartment.getInstance();
  
  it.addEmployee("Julie");
  
  it.describe(); 
  it.printEmployeeInformation();
  
  