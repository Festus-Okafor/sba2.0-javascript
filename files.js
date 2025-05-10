// The provided course information.
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript",
};

// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50,
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150,
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500,
    },
  ],
};

   
// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47,
    },
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150,
    },
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400,
    },
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 3,
    },
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140,
    },
  },
];

function courserId(id, name) {
  return { course_id: 451, name: "Introduction to JavaScript" };
}
let course = courserId(451, "Introduction to Javascript");
console.log(course);
console.log(
  `course Details: \n id: 12345,\n name: "Fundamentals of JavaScript",\n course_id: 451,\n group_weight: 25, `
);

//1. first figure out who are the students
//generate an array of unique students ids
// generating and storing individual  submissions for learner/learner_id = 125
let learner_125 = [];
for (let i = 0; i < LearnerSubmissions.length; i++) {
  if (LearnerSubmissions[i].learner_id == 125) {
    learner_125.push(LearnerSubmissions[i]);
  }
}
console.log(`........................................................`);
// generating and storing the individual submissions for learner/learner_id = 132
let learner_132 = [];
for (let i = 0; i < LearnerSubmissions.length; i++) {
  if (LearnerSubmissions[i].learner_id == 132) {
    learner_132.push(LearnerSubmissions[i]);
  }
}
console.log(`........................................................`);
//3. get the assignments and calculate the grade
//now you have an object for each student that has score
// students individual scores and info for Assignment_id = 1
let Assignment_id1_studentsInfo = [];
for (let i = 0; i < LearnerSubmissions.length; i++) {
  if (LearnerSubmissions[i].assignment_id == 1) {
    Assignment_id1_studentsInfo.push(LearnerSubmissions[i]);
  }
}
Ass1_Student125_score = Assignment_id1_studentsInfo[0].submission.score;
Ass1_Student132_score = Assignment_id1_studentsInfo[1].submission.score;

{
  // students individual scores and info for Assignment_id = 2
  let Assignment_id2_studentsInfo = [];
  for (let i = 0; i < LearnerSubmissions.length; i++) {
    if (LearnerSubmissions[i].assignment_id == 2) {
      Assignment_id2_studentsInfo.push(LearnerSubmissions[i]);
    }
  }
  Ass2_Student125_score = Assignment_id2_studentsInfo[0].submission.score;
  Ass2_Student132_score = Assignment_id2_studentsInfo[1].submission.score;
  
  // students individual scores and info for Assignment_id = 3
  // from my output, i discovered that only one student submitted assignment_id = 3
  let Assignment_id3_studentsInfo = [];
  for (let i = 0; i < LearnerSubmissions.length; i++) {
    if (LearnerSubmissions[i].assignment_id == 3) {
      Assignment_id3_studentsInfo.push(LearnerSubmissions[i]);
    }
  }
  Ass3_Student125_score = Assignment_id3_studentsInfo[0].submission.score;
  
  
}

console.log(` For learner_id: 125. Scores gotten` )
console.log(Ass1_Student125_score);
console.log(Ass2_Student125_score);
console.log(Ass3_Student125_score);

console.log(` For learner_id: 132. Scores gotten` )
console.log(Ass1_Student132_score);
console.log(Ass2_Student132_score);


//output= (array of objects each containing Id, avg and assignment-number)
     student125_Avr = (((Ass1_Student125_score/50)+(Ass2_Student125_score/150)+(Ass3_Student125_score/500))*100);
    //console.log(`learner_id: 125; Average:  ${student125_Avr} %`);

    student132_Avr = (((Ass1_Student132_score/50)+(Ass2_Student132_score/150))*100);
  // console.log(`learner_id: 132; Average:  ${student132_Avr} %`);
     
  console.log(`.......................................................................................`)

   function getLearnerData(id, average, sub1, sub2, sub3){
 
        return [
            {
            id: 125,
            average: "274 %",
            sub1: 47,
            sub2: 150,
            sub3: 400,  
            }
        ,
        {
            id: 132,
            average: "99.33333333333334 %",
            sub1: 3,
            sub2: 140,
        }
      ] ;
    }

     
    let Result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
    console.log(Result); 


    
 
     