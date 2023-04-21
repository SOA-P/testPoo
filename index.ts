class Person {
    firstName: string;
    age: number;
    
      constructor(firstName: string, age: number) {
        this.firstName = firstName;
        this.age = age;
      };
  
     getFullName() {
      return `I am ${this.firstName} and I am ${this.age} years old`
     }
  };
   
  const user1 = new Person("Mary", 35)
  const user2 = new Person("John", 40)
  
  console.log(user1.getFullName());
  console.log(user2.getFullName());
  
  
  
  
   