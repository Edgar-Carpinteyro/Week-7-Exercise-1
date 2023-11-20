class Student {
    constructor(name, age, major) {
        this.name = name;
        this.age = age;
        this.major = major;
    }
}

let newStudent1 = new Student("Leo", 20, "Computer Science");
console.log(newStudent1);

console.log(`Welcome to our new student ${newStudent1.name}. He is ${newStudent1.age} years old and his major is ${newStudent1.major}.`);

const studentName = document.getElementById("name");
const studentAge= document.getElementById("age");
const studentMajor = document.getElementById("major");

studentName.textContent = newStudent1.name;
studentAge.textContent = newStudent1.age;
studentMajor.textContent = newStudent1.major;


