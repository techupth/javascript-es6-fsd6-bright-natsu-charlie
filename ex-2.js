let studentProfile = {
  name: "John",
  age: 20,
  scores: {
    thai: 40,
  },
};

let studentScores = {
  math: 30,
  english: 70,
  tech: 100,
};

let updatedStudentProfile = {
  ...studentProfile,
  scores: {
    ...studentProfile.scores,
    ...studentScores,
  },
};

console.log(updatedStudentProfile);
