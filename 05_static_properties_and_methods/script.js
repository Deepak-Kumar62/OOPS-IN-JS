class CreateUser {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

//   static standard = "12th";

  // static getFullName() {
  //   return this.firstName + " " + this.lastName;
  // }

  static {
    console.log("Static Block");
    this.standard = "11th";
    this.getFullName = function () {
      return this.firstName + " " + this.lastName;
    };
  }

  getBirthYear() {
    return new Date().getFullYear() - this.age;
  }
}

//   CreateUser.complexion = "Fair"

const user1 = new CreateUser("Deepak", "Kumar", 21);
const user2 = new CreateUser("Viany", "Kumar", 20);

// console.log(CreateUser);
// console.log(CreateUser.standard);
// console.log(user1.standard); // undefined

console.log(CreateUser.getFullName)
console.log(CreateUser.getFullName())
