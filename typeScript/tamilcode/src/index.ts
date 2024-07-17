let day = "sunday";

let names = "balamurugan"

let age: Number = 12;
let firstName: String = "balamurugan";
let isEmpty: boolean = true;

let a: number[] = [1, 2];
let b: string[] = ["bala"];
let c: boolean[] = [true]

// let obj = {
//     lastName: "murugan",
//     age: 21,
//     ispermenent: true,
// }

type Obj = {
    lastName: string,
    age?: number,
    ispermenent: boolean,
    firstName: string
}

let obj: Obj = {
    lastName: "murugan",
    ispermenent: true,
    firstName: "bala",
}

let emp: (string | number | boolean)[] = []
emp.push("bala");
emp.push(22);
emp.push(false);
// console.log(emp)

let empName: string | number = "";
empName = "balamurugan";
empName = 22

let empAge: any = ""

let sum = (a: number, b: number, c: (number | string)): number => {
    if (typeof c === 'number') {
        return a + b + c
    }
    return a + b
}
// console.log(sum(10, 10, 10))
type User = {
    name: string,
    age: number
}

let printObj = (user: User) => {
    return `Name:${user.name},Age:${user.age}`

}
// console.log(printObj({ name: "balamurugan", age: 12 }))

let add = (a: number, b: number, ...c: number[]): number => {

    // console.log(c)
    const d = c.reduce((x, y) => x + y, 0)
    return a + b + d
}
// console.log(add(10, 10, 1, 2, 3, 4, 5))

//type script interface only working object

interface UserDetails {
    firstName: string,
    age: number
}

const user: UserDetails = {
    firstName: "",
    age: 10
}

interface Add {
    (a: number, b: number): number
}

const addNumber: Add = (x: number, y: number) => {
    return x + y
}

interface Employee extends UserDetails {
    empId: number,
    salary: number
}

const employee: Employee = {
    firstName: "balamurugan",
    age: 12,
    empId: 1,
    salary: 1000
}
//class

class UserClass {
    id: number
    constructor(x: number) {
        this.id = x
    }
}
const userObj = new UserClass(10);
// console.log(userObj.id)

interface UserInterface {
    id: number,
    name: string
}
interface AddressInterface {
    city: string
}
class Person implements UserInterface, AddressInterface {
    id: number;
    name: string;
    city: string;
    constructor(x: number, y: string, z: string) {
        this.id = x;
        this.name = y;
        this.city = z;
    }
    getName = () => {
        return this.name
    }
}

const personObj = new Person(1, "bala", "srivi")
// console.log(personObj.name)
// console.log(personObj.getName())
// console.log(personObj.city)

class Student extends Person {
    studentId: number = 101;
    getStudent = () => {
        return `student name is ${this.name} and Id is ${this.studentId}`
    }
}

const stuObj = new Student(100, "balamurugan", "srivi")
console.log(stuObj.getStudent())

//Abstract class

abstract class EmpData {
    abstract firstName: string
    abstract print(): void
}

class StudentData extends EmpData {
    firstName: string
    constructor(x: string) {
        super()
        this.firstName = x
    }
    print = () => {
        console.log(this.firstName)
    }
}

const studentDataObj = new StudentData('bala')

studentDataObj.print()

