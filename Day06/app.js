class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }
}

const tom = new Person("Tom", 25);
const john = new Person("John", 30);

console.log(tom.getName()); // Tom
console.log(tom.getAge()); // 25
console.log(john.getName()); // John
console.log(john.getAge()); // 30
