// Level 1:
// Create a class called Student that has two attributes: a name, and a grade.
class Student {
  constructor (n, g){
    this.name = n;
    this.grade = g;
  }
}

// Now create instances of three different students (student1, student2, and student3).

let student1 = new Student("Anne", 3);
let student2 = new Student("Bob", 10);
let student3 = new Student("Calvin", 7);

// Confirm that the class works by printing out the first student's name.
console.log("The first student's name is "+student1.name)

// Level 2:
// Create a class called School that has three attributes: a name, a type, and a size.
class School {
  constructor(n, t, s){
    this.name = n;
    this.type = t;
    this.size = s;
  }  
}
// Create instances of three individual schools.
let schoolA = new School("WNA", "high school", 1000);
let schoolB = new School("MMI", "middle school", 500);
let schoolC = new School("SRDS", "preK-12", 300);

// Confirm that the class works by printing out the name and size of the third school.
console.log("The third school's name is "+schoolC.name+". It's size is "+schoolC.size)

// Level 3:
// Create a class called House that has four attributes: an address, a size, a price, and a number of bedrooms.



// Create instances of at least three individual houses.



// Confirm that the class works by printing out the address and size of the second house.



// Level 4: (Stretch)
// Put your three students in an array called myStudents, your houses in an array for houses, and your schools in an array for schools.
let students = [student1, student2, student3];

// Iterate over the student array, printing out "_____ is in grade __." For each of the students.
for (let i = 0; i < students.length; i++){
  console.log(students[i].name+" is in grade "+students[i].grade)
}


// Iterate over the houses array and print out a description for each one. Do the same for your schools array.



// Level 5: (Stretch)
// Modify your student class above to include a savingsAccount value for each student. Change your initializers so that the code still runs.



// Write some code that compares a student and a house, 
// and determines whether or not the student can afford to buy the house.
