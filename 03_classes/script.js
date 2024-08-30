// class CreateUser {}

// CreateUser.prototype.getBirthYear = function(){
//     return new Date().getFullYear() - this.age
// }

// CreateUser.prototype.getFullName = function(){
//     return this.firstName + " " + this.lastName
// }

// console.log(typeof CreateUser)
// console.log(CreateUser.prototype)

// behind the scene, class is also a function
class CreateUser {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getFullName() {
    return this.firstName + " " + this.lastName;
  }

  getBirthYear() {
    return new Date().getFullYear() - this.age;
  }
}

const user1 = new CreateUser("Deepak", "Kumar", 21);
const user2 = new CreateUser("Viany", "Kumar", 20);

console.log(CreateUser.prototype);

console.log(user1);
console.log(user2);

console.log(user1.__proto__);
console.log(user2.__proto__);

console.log(user1.getBirthYear());
console.log(user2.getBirthYear());

console.log(user1.getBirthYear == user2.getBirthYear)
