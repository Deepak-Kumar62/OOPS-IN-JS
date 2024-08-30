// function getBirthYear() {
//   return new Date().getFullYear() - this.age;
// }

// const createUser = (name, age) => {
//   return {
//     name,
//     age,
//     getBirthYear
//   };
// };

// const user1 = createUser("Chandan", 13);
// const user2 = createUser("Abhishek", 1);
// const user3 = createUser("Chandani", 12);

// console.log(user1.getBirthYear());
// console.log(user2.getBirthYear());
// console.log(user3.getBirthYear());

// console.log(user1.getBirthYear === user2.getBirthYear)

// const createUser = (name, age) => {
//   return {
//     name,
//     age,
//     getBirthYear: createUser.commonMethods.getBirthYear,
//   };
// };

// createUser.commonMethods = {
//   getBirthYear() {
//     return new Date().getFullYear() - this.age;
//   },
// };

// const user1 = createUser("Chandan", 13);
// const user2 = createUser("Abhishek", 1);
// const user3 = createUser("Chandani", 12);

// console.log(user1.getBirthYear());
// console.log(user2.getBirthYear());
// console.log(user3.getBirthYear());

// console.log(user1.getBirthYear === user2.getBirthYear);





// function func(){
//     console.log(this) 
//     // This represent the object which is created by this function by default when it will be called using new keyword
//     return "hello"
// }

// console.log(new func()) 
// // when we call a function using new keyword then it is called constructor function and return a object which is created by this function automatically whether we return or not anything from this function manually

// console.log(func.prototype)
// console.dir(func)




function createUser(firstName, lastName, age){
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
}

createUser.prototype.getBirthYear = function(){
    return new Date().getFullYear() - this.age
}

createUser.prototype.getFullName = function(){
    return this.firstName + " " + this.lastName
}

const user1 = new createUser("Deepak", "Kumar", 21)
const user2 = new createUser("Vinay", "Kumar", 20)
const user3 = new createUser("Mandeep", "Kumar", 16)

console.log(createUser.prototype)

console.log(user1.__proto__)
console.log(user2.__proto__)

console.log(user1.__proto__.getBirthYear())
console.log(user2.__proto__.getBirthYear())

console.log(user1.prototype)


console.log(user1)
console.log(user2)
console.log(user3)

console.log(user1.getBirthYear())
console.log(user2.getBirthYear())
console.log(user3.getBirthYear())

console.log(user1.getFullName())
console.log(user2.getFullName())
console.log(user3.getFullName())

console.log(user1.getFullName === user2.getFullName)
console.log(user2.getBirthYear === user3.getBirthYear)