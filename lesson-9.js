const objC = {
  a: 1,
};

console.log(objC);

const objB = Object.create(objC);
objB.b = 2;

console.log(objB.a);

const objA = Object.create(objB);
objA.c = 3;

console.log(objA.b);

console.log(objA);

class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const firstStudent = new Student('Aндрій', 25);
console.log(firstStudent);
console.log(firstStudent.name);
console.log(firstStudent.age);
