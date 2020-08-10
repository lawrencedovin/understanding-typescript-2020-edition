var Department = /** @class */ (function () {
    function Department(nameInput) {
        this.name = nameInput;
    }
    Department.prototype.describe = function () {
        console.log("Department: " + this.name);
    };
    return Department;
}());
var accounting = new Department("Accounting");
console.log(accounting.describe());
