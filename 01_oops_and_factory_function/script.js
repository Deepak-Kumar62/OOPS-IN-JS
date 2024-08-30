const user1 = {
  name: "Deeepak Kumar",
  age: 21,
  getBirthYear: function () {
    return new Date().getFullYear() - user1.age;
  },
};

const user2 = {
  name: "Vinay Kumar",
  age: 20,
  getBirthYear: function () {
    return new Date().getFullYear() - user2.age;
  },
};

const user3 = {
  name: "Mandeep Kumar",
  age: 14,
  getBirthYear: function () {
    return new Date().getFullYear() - user3.age;
  },
};

console.log(user1.getBirthYear());
console.log(user2.getBirthYear());
console.log(user3.getBirthYear());

// Here we are writing repetitive code to generate user with same properties with different value so we use factory function to resolve this

//Factory function
const createUser = (name, age) => {
  return {
    name,
    age,
    getBirthYear: function () {
      return new Date().getFullYear() - age;
    },
  };
};

const user4 = createUser("Chandan", 13);
const user5 = createUser("Abhishek", 1);
const user6 = createUser("Chandani", 12);

console.log(user4.getBirthYear());
console.log(user5.getBirthYear());
console.log(user6.getBirthYear());

// Here is a problem is that the every user has it's own getBirthYear whose working is same, occupy extra space in memory
