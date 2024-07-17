var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var day = "sunday";
var names = "balamurugan";
var age = 12;
var firstName = "balamurugan";
var isEmpty = true;
var a = [1, 2];
var b = ["bala"];
var c = [true];
var obj = {
    lastName: "murugan",
    ispermenent: true,
    firstName: "bala",
};
var emp = [];
emp.push("bala");
emp.push(22);
emp.push(false);
// console.log(emp)
var empName = "";
empName = "balamurugan";
empName = 22;
var empAge = "";
var sum = function (a, b, c) {
    if (typeof c === 'number') {
        return a + b + c;
    }
    return a + b;
};
var printObj = function (user) {
    return "Name:".concat(user.name, ",Age:").concat(user.age);
};
// console.log(printObj({ name: "balamurugan", age: 12 }))
var add = function (a, b) {
    var c = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        c[_i - 2] = arguments[_i];
    }
    // console.log(c)
    var d = c.reduce(function (x, y) { return x + y; }, 0);
    return a + b + d;
};
var user = {
    firstName: "",
    age: 10
};
var addNumber = function (x, y) {
    return x + y;
};
var employee = {
    firstName: "balamurugan",
    age: 12,
    empId: 1,
    salary: 1000
};
//class
var UserClass = /** @class */ (function () {
    function UserClass(x) {
        this.id = x;
    }
    return UserClass;
}());
var userObj = new UserClass(10);
var Person = /** @class */ (function () {
    function Person(x, y, z) {
        var _this = this;
        this.getName = function () {
            return _this.name;
        };
        this.id = x;
        this.name = y;
        this.city = z;
    }
    return Person;
}());
var personObj = new Person(1, "bala", "srivi");
// console.log(personObj.name)
// console.log(personObj.getName())
// console.log(personObj.city)
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.studentId = 101;
        _this.getStudent = function () {
            return "student name is ".concat(_this.name, " and Id is ").concat(_this.studentId);
        };
        return _this;
    }
    return Student;
}(Person));
var stuObj = new Student(100, "balamurugan", "srivi");
console.log(stuObj.getStudent());
