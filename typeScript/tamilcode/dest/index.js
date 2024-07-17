"use strict";
let day = "sunday";
let names = "balamurugan";
let age = 12;
let firstName = "balamurugan";
let isEmpty = true;
let a = [1, 2];
let b = ["bala"];
let c = [true];
let obj = {
    lastName: "murugan",
    ispermenent: true,
    firstName: "bala",
};
let emp = [];
emp.push("bala");
emp.push(22);
emp.push(false);
// console.log(emp)
let empName = "";
empName = "balamurugan";
empName = 22;
let empAge = "";
let sum = (a, b, c) => {
    if (typeof c === 'number') {
        return a + b + c;
    }
    return a + b;
};
let printObj = (user) => {
    return `Name:${user.name},Age:${user.age}`;
};
// console.log(printObj({ name: "balamurugan", age: 12 }))
let add = (a, b, ...c) => {
    // console.log(c)
    const d = c.reduce((x, y) => x + y, 0);
    return a + b + d;
};
const user = {
    firstName: "",
    age: 10
};
const addNumber = (x, y) => {
    return x + y;
};
const employee = {
    firstName: "balamurugan",
    age: 12,
    empId: 1,
    salary: 1000
};
//class
class UserClass {
    constructor(x) {
        this.id = x;
    }
}
const userObj = new UserClass(10);
class Person {
    constructor(x, y, z) {
        this.getName = () => {
            return this.name;
        };
        this.id = x;
        this.name = y;
        this.city = z;
    }
}
const personObj = new Person(1, "bala", "srivi");
// console.log(personObj.name)
// console.log(personObj.getName())
// console.log(personObj.city)
class Student extends Person {
    constructor() {
        super(...arguments);
        this.studentId = 101;
        this.getStudent = () => {
            return `student name is ${this.name} and Id is ${this.studentId}`;
        };
    }
}
const stuObj = new Student(100, "balamurugan", "srivi");
console.log(stuObj.getStudent());
//Abstract class
class EmpData {
}
class StudentData extends EmpData {
    constructor(x) {
        super();
        this.print = () => {
            console.log(this.firstName);
        };
        this.firstName = x;
    }
}
const studentDataObj = new StudentData('bala');
studentDataObj.print();
