let studentProfile = {
  name: "John",
  age: 20,
  scores: {
    thai: 40,
  },
  hobbies: ["Football", "Coding"],
};

let additionalHobbies = {
  name: "John",
  age: 20,
  scores: {
    thai: 40,
  },
  hobbies: ["Painting", "Yoga"],
};

// Start coding here
let newStudentProfile = {
  ...studentProfile,
  ...additionalHobbies,
};
console.log(newStudentProfile);
