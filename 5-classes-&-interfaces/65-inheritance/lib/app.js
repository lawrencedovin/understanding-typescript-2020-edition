var Department = /** @class */ (function () {
    function Department(nameInput) {
        this.employees = [];
        this.name = nameInput;
    }
    Department.prototype.describe = function () {
        console.log("Department: " + this.name);
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Department;
}());
var accounting = new Department("Accounting");
accounting.addEmployee("Lawrence");
accounting.addEmployee("Julie");
accounting.describe();
accounting.printEmployeeInformation();
