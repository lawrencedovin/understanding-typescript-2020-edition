var Department = /** @class */ (function () {
    function Department(nameInput) {
        this.name = nameInput;
    }
    return Department;
}());
var accounting = new Department("Accounting");
console.log(accounting.name);
