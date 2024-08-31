class CreateUser {
    // Private Property
    #age
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.#age = age;
    }

    //global Field
    standard = "12th"
  
    #getFullName() {
      return this.firstName + " " + this.lastName;
    }
  
    getBirthYear() {
        console.log(this.#getFullName())
      return new Date().getFullYear() - this.#age;
    }
  }
  
  const user1 = new CreateUser("Deepak", "Kumar", 21);
  const user2 = new CreateUser("Viany", "Kumar", 20);

  console.log(user1.age) // undefined
//   console.log(getFullName()) // error, not defined
  
console.log(user1.standard)
console.log(user2.standard)