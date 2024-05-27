let studentProfile = {
  name: "John",
  age: 20,
  scores: {
    thai: 40,
  },
};

let additionalProperties = {
  photo: "https://placedog.net/500",
  hobbies: ["Football", "Coding"],
};

let updatedStudentProfile = {
  ...studentProfile,
  ...additionalProperties,
};

console.log(updatedStudentProfile);
