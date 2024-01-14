// class

// 1-masala

// class Triangle {
//     #leftSide;
//     #rightSide;
//     #width;

//     constructor() {
//         this.#leftSide = 0;
//         this.#rightSide = 0;
//         this.#width = 0;
//     }

//     getLeftSide() {
//         return this.#leftSide;
//     }

//     getRightSide() {
//         return this.#rightSide;
//     }

//     getWidth() {
//         return this.#width;
//     }

//     setSides(a, b, c) {
//         if (this.isValidTriangle(a, b, c)) {
//             this.#leftSide = a;
//             this.#rightSide = b;
//             this.#width = c;
//         } else {
//             console.error("Invalid triangle sides! The sum of any two sides must be greater than the third side.");
//         }
//     }

//     isValidTriangle(a, b, c) {
//         return a + b > c && b + c > a && c + a > b;
//     }
// }

// let myTriangle = new Triangle();
// myTriangle.setSides(3, 4, 5);

// console.log(myTriangle.getLeftSide());
// console.log(myTriangle.getRightSide()); 
// console.log(myTriangle.getWidth()); 



// 2-masala

// class Employee {
//     #id;
//     #firstName;
//     #lastName;
//     #salary;

//     constructor(id, firstName, lastName, salary) {
//         this.#id = id;
//         this.#firstName = firstName;
//         this.#lastName = lastName;
//         this.#salary = salary;
//     }

//     getId() {
//         return this.#id;
//     }

//     getFirstName() {
//         return this.#firstName;
//     }

//     getLastName() {
//         return this.#lastName;
//     }

//     getSalary() {
//         return this.#salary;
//     }

//     setId(id) {
//         this.#id = id;
//     }

//     setFirstName(fName) {
//         this.#firstName = fName;
//     }

//     setLastName(lName) {
//         this.#lastName = lName;
//     }

//     setSalary(s) {
//         this.#salary = s;
//     }

//     getFullName() {
//         return `${this.#firstName} ${this.#lastName}`;
//     }

//     getAnnualSalary() {
//         return this.#salary * 12;
//     }

//     raiseSalary(percent) {
//         const increase = this.#salary * (percent / 100);
//         this.#salary += increase;
//     }
// }

// let employee = new Employee(1, "John", "Doe", 50000);

// console.log(employee.getFullName()); 
// console.log(employee.getSalary()); 

// employee.raiseSalary(10);
// console.log(employee.getSalary()); 



// 3-masala

// class CustomDate {
//     #day;
//     #month;
//     #year;

//     constructor(day, month, year) {
//         this.#day = day;
//         this.#month = month;
//         this.#year = year;
//     }

//     getDay() {
//         return this.#day;
//     }

//     getMonth() {
//         return this.#month;
//     }

//     getYear() {
//         return this.#year;
//     }

//     setDay(day) {
//         this.#day = day;
//     }

//     setMonth(month) {
//         this.#month = month;
//     }

//     setYear(year) {
//         this.#year = year;
//     }

//     getISODate() {

//         const formattedDay = this.#day < 10 ? `0${this.#day}` : this.#day;
//         const formattedMonth = this.#month < 10 ? `0${this.#month}` : this.#month;

//         return `${formattedDay}-${formattedMonth}-${this.#year}`;
//     }
// }

// let myDate = new CustomDate(12, 5, 2023);

// console.log(myDate.getISODate()); 
// myDate.setMonth(10);
// console.log(myDate.getISODate()); 




// 4-misol

// class Time {
  
//     #hour;
//     #minute;
//     #second;

//     constructor(hour, minute, second) {
//         this.#hour = hour;
//         this.#minute = minute;
//         this.#second = second;
//     }

//     getHour() {
//         return this.#hour;
//     }

//     getMinute() {
//         return this.#minute;
//     }

//     getSecond() {
//         return this.#second;
//     }

//     setHour(hour) {
//         this.#hour = hour;
//     }

//     setMinute(minute) {
//         this.#minute = minute;
//     }

//     setSecond(second) {
//         this.#second = second;
//     }

//     nextSecond() {
//         this.#second++;
//         if (this.#second === 60) {
//             this.#second = 0;
//             this.#minute++;

//             if (this.#minute === 60) {
//                 this.#minute = 0;
//                 this.#hour++;

//                 if (this.#hour === 24) {
//                     this.#hour = 0;
//                 }
//             }
//         }
//     }

//     previousSecond() {
//         this.#second--;
//         if (this.#second === -1) {
//             this.#second = 59;
//             this.#minute--;

//             if (this.#minute === -1) {
//                 this.#minute = 59;
//                 this.#hour--;

//                 if (this.#hour === -1) {
//                     this.#hour = 23;
//                 }
//             }
//         }
//     }
// }

// let myTime = new Time(6, 20, 10);

// console.log(`${myTime.getHour()}:${myTime.getMinute()}:${myTime.getSecond()}`);

// myTime.nextSecond();
// console.log(`${myTime.getHour()}:${myTime.getMinute()}:${myTime.getSecond()}`); 

// myTime.previousSecond();
// console.log(`${myTime.getHour()}:${myTime.getMinute()}:${myTime.getSecond()}`); 




// Inheritance

// 5-masala

// class Shape {
//     #color;
//     #filled;
//     constructor(color, filled) {
//         this.#color = color;
//         this.#filled = filled;
//     }

//     getColor() {
//         return this.#color;
//     }

//     setColor(color) {
//         this.#color = color;
//     }

//     isFilled() {
//         return this.#filled;
//     }

//     setFilled(filled) {
//         this.#filled = filled;
//     }
// }

// class Circle extends Shape {
//     #radius;

//     constructor(color, filled, radius) {
//         super(color, filled);
//         this.#radius = radius;
//     }
//     getRadius() {
//         return this.#radius;
//     }

//     setRadius(radius) {
//         this.#radius = radius;
//     }

//     getArea() {
//         return Math.PI * this.#radius * this.#radius;
//     }

//     getPerimeter() {
//         return 2 * Math.PI * this.#radius;
//     }
// }

// class Rectangle extends Shape {
//     #width;
//     #height;

//     constructor(color, filled, width, height) {
//         super(color, filled);
//         this.#width = width;
//         this.#height = height;
//     }

//     getWidth() {
//         return this.#width;
//     }

//     setWidth(width) {
//         this.#width = width;
//     }

//     getHeight() {
//         return this.#height;
//     }

//     setHeight(height) {
//         this.#height = height;
//     }

//     getArea() {
//         return this.#width * this.#height;
//     }

//     getPerimeter() {
//         return 2 * (this.#width + this.#height);
//     }
// }

// let circle = new Circle("red", true, 5);
// console.log(circle.getColor()); 
// console.log(circle.getRadius()); 
// console.log(circle.getArea()); 

// let rectangle = new Rectangle("blue", false, 4, 6);
// console.log(rectangle.isFilled()); 
// console.log(rectangle.getWidth()); 
// console.log(rectangle.getPerimeter()); 



// 6-masala

// class Person {
//     #name;
//     #address;

//     constructor(name, address) {
//         this.#name = name;
//         this.#address = address;
//     }

//     getName() {
//         return this.#name;
//     }

//     setName(name) {
//         this.#name = name;
//     }

//     getAddress() {
//         return this.#address;
//     }

//     setAddress(address) {
//         this.#address = address;
//     }
// }

// class Student extends Person {
//     #faculty;
//     #year;
//     #university;

//     constructor(name, address, faculty, year, university) {
//         super(name, address);
//         this.#faculty = faculty;
//         this.#year = year;
//         this.#university = university;
//     }

//     getFaculty() {
//         return this.#faculty;
//     }

//     getYear() {
//         return this.#year;
//     }

//     getUniversity() {
//         return this.#university;
//     }

//     setFaculty(faculty) {
//         this.#faculty = faculty;
//     }

//     setYear(year) {
//         this.#year = year;
//     }

//     setUniversity(university) {
//         this.#university = university;
//     }
// }

// class Employee extends Person {
//     #salary;
//     #work;

//     constructor(name, address, salary, work) {
//         super(name, address);
//         this.#salary = salary;
//         this.#work = work;
//     }

//     getSalary() {
//         return this.#salary;
//     }

//     getWork() {
//         return this.#work;
//     }

//     setSalary(salary) {
//         this.#salary = salary;
//     }

//     setWork(work) {
//         this.#work = work;
//     }
// }

// let student = new Student("John Doe", "123 Main St", "Computer Science", 2, "University of XYZ");
// console.log(student.getName()); 
// console.log(student.getYear()); 

// let employee = new Employee("Jane Smith", "456 Broad St", 50000, "Software Developer");
// console.log(employee.getAddress()); 
// console.log(employee.getSalary()); 



// 7-masala

// class Animal {
//     #name;
//     #speed;
//     #weight;

//     constructor(name, speed, weight) {
//         this.#name = name;
//         this.#speed = speed;
//         this.#weight = weight;
//     }

//     getName() {
//         return this.#name;
//     }

//     getSpeed() {
//         return this.#speed;
//     }

//     getWeight() {
//         return this.#weight;
//     }
// }

// class Mammal extends Animal {
//     #legs;

//     constructor(name, speed, weight, legs) {
//         super(name, speed, weight);
//         this.#legs = legs;
//     }

//     getLegs() {
//         return this.#legs;
//     }

//     setLegs(legs) {
//         this.#legs = legs;
//     }
// }

// class Cat extends Mammal {
//     getSound() {
//         return "Meow";
//     }
// }

// class Dog extends Mammal {
//     getSound() {
//         return "Woof";
//     }
// }

// class Fish extends Animal {
//     #size;

//     constructor(name, speed, weight, size) {
//         super(name, speed, weight);
//         this.#size = size;
//     }

//     getSize() {
//         return this.#size;
//     }

//     setSize(size) {
//         this.#size = size;
//     }
// }

// class Whale extends Fish {
//     getSound() {
//         return "Poof";
//     }
// }

// class Shark extends Fish {
//     getSound() {
//         return "Sheef";
//     }
// }

// let cat = new Cat("Whiskers", 15, 5, 4);
// console.log(cat.getName()); 
// console.log(cat.getLegs()); 
// console.log(cat.getSound()); 

// let shark = new Shark("Jaws", 20, 1000, 3);
// console.log(shark.getSize()); 
// console.log(shark.getSound()); 



// Static keyword

// 8-masala

// class CustomObject extends Object {
//     static customKeys(obj) {
//         return Object.keys(obj);
//     }

//     static customValues(obj) {
//         return Object.values(obj);
//     }

//     static customEntries(obj) {
//         return Object.entries(obj);
//     }
// }

// class CustomNumber extends Number {
//     static customIsInteger(num) {
//         return Number.isInteger(num);
//     }
// }

// class CustomArray extends Array {
//     static customIsArray(arr) {
//         return Array.isArray(arr);
//     }
// }

// const myObject = { a: 1, b: 2, c: 3 };

// console.log(CustomObject.customKeys(myObject)); 
// console.log(CustomObject.customValues(myObject)); 
// console.log(CustomObject.customEntries(myObject)); 

// const myNumber = 42;

// console.log(CustomNumber.customIsInteger(myNumber)); 
// const myArray = [1, 2, 3];

// console.log(CustomArray.customIsArray(myArray)); 



// 9-masala

// class CustomArray extends Array {
//     static isNumberArray(arr) {
//         return arr.every(element => typeof element === 'number');
//     }

//     static sum(arr) {
//         return arr.reduce((total, num) => total + num, 0);
//     }

//     static max(arr) {
//         return Math.max(...arr);
//     }
//     static min(arr) {
//         return Math.min(...arr);
//     }
// }

// const numericArray = [1, 2, 3, 4, 5];
// const nonNumericArray = [1, 2, 'three', 4, 5];

// console.log(CustomArray.isNumberArray(numericArray)); 
// console.log(CustomArray.isNumberArray(nonNumericArray)); 

// console.log(CustomArray.sum(numericArray)); 

// console.log(CustomArray.max(numericArray));

// console.log(CustomArray.min(numericArray)); 



// Polymorphism and inheritance

// 10-masala

class Person {
    #housePrice;
    #housesNumber;
    #carPrice;
    #carsNumber;
    #bankAccount;

    constructor(housePrice, housesNumber, carPrice, carsNumber, bankAccount) {
        this.#housePrice = housePrice;
        this.#housesNumber = housesNumber;
        this.#carPrice = carPrice;
        this.#carsNumber = carsNumber;
        this.#bankAccount = bankAccount;
    }

    getWealth() {
        return this.#housePrice * this.#housesNumber + this.#carPrice * this.#carsNumber + this.#bankAccount;
    }
}

class RichPerson extends Person {
    #companyPrice;
    #companiesNumber;
    #investigation;

    constructor(housePrice, housesNumber, carPrice, carsNumber, bankAccount, companyPrice, companiesNumber, investigation) {
        super(housePrice, housesNumber, carPrice, carsNumber, bankAccount);
        this.#companyPrice = companyPrice;
        this.#companiesNumber = companiesNumber;
        this.#investigation = investigation;
    }

    getWealth() {
        return super.getWealth() + this.#companyPrice * this.#companiesNumber + this.#investigation;
    }
}

let ordinaryPerson = new Person(200000, 1, 30000, 2, 50000);
console.log(ordinaryPerson.getWealth()); 

let richPerson = new RichPerson(200000, 1, 30000, 2, 50000, 1000000, 3, 200000);
console.log(richPerson.getWealth()); 