class CreateUser {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getBirthYear() {
    return new Date().getFullYear() - this.age;
  }

  //   static get fullName() {
  //     return this.firstName + " " + this.lastName;
  //   }

  get fullName() {
    return this.firstName + " " + this.lastName;
  }

  set fullName(value) {
    const [firstName, lastname] = value.split(" ");
    this.firstName = firstName;
    this.lastname = lastname;
  }
}

const user1 = new CreateUser("Deepak", "Kumar", 32);
const user2 = new CreateUser("Vinay", "Singh", 72);

// console.log(CreateUser.fullName) // undefined

console.log(typeof user1.fullName);
console.log(user1.fullName);
console.log(user2.fullName);

user1.fullName = "Yaduvansi Deepak"

console.log(user1.fullName);

// const user = {
//     firstName: "Deepak",
//     lastname: "Kumar",
//     get fullname(){
//         return this.firstName + " " + this.lastname
//     },

//     set fullName(value){
//         const [firstName, lastname] = value.split(' ')
//         this.firstName = firstName
//         this.lastname = lastname

//     }
//     // getFullName: function(){
//     //     return this.firstName + " " + this.lastname
//     // }
// }

// // console.log(user.getFullName)
// // console.log(user.getFullName())

// console.log(user.fullname)
// console.log(typeof user.fullname) // string
// // console.log(user.fullname()) // getter function can not be called

// user.fullName = "Mandeep Kumar"
// console.log(user.fullname)
// console.log(user)
