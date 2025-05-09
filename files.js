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

  //1. first figure out who are the students
  //generate an array of unique students ids
  //generate an array of students ids -> [125,125,125,132,132]
  //generate the array from submissions data then make it unique -> [125,132]
  
  // calculating the avg gotten by each learner for each of the assignments
  //  for assignment 1 and learner 125
  
  console.log(
    `course Details: \n id: 12345,\n name: "Fundamentals of JavaScript",\n course_id: 451,\n group_weight: 25, `
  );
// generating and storing the individual array submissions for learner/learner_id = 125 
 let learner_125 = [];
 for (let i=0; i< LearnerSubmissions.length; i++ ){
     if(LearnerSubmissions[i].learner_id == 125){
     learner_125.push(LearnerSubmissions[i]);
     }   
 }
 console.log(learner_125);


console.log(`........................................................`)
// generating and storing the individual array submissions for learner/learner_id = 132
let learner_132 = [];
 for (let i=0; i< LearnerSubmissions.length; i++ ){
     if(LearnerSubmissions[i].learner_id == 132){
     learner_132.push(LearnerSubmissions[i]);
     }   
 }
 console.log(learner_132);

 console.log(`........................................................`)
 //3. get the assignments and calculate the grade
 //find the assignment for each student and their score
 //-> [{id:125,1:47,2:150,3:400},{id:132,1:32,2:140}]
 //now you have an object for each student that has score

// students individual scores and info for Assignment_id = 1
let Assignment_id1_studentsInfo = [];
 for (let i=0; i< LearnerSubmissions.length; i++ ){
     if(LearnerSubmissions[i].assignment_id ==1){
        Assignment_id1_studentsInfo.push(LearnerSubmissions[i]);
     }   
 }

 console.log(Assignment_id1_studentsInfo); 
 
 
 {
// students individual scores and info for Assignment_id = 2
 let Assignment_id2_studentsInfo = [];
 for (let i=0; i< LearnerSubmissions.length; i++ ){
     if(LearnerSubmissions[i].assignment_id ==2){
        Assignment_id2_studentsInfo.push(LearnerSubmissions[i]);
     }   
 }
 console.log(Assignment_id2_studentsInfo);  


}
// students individual scores and info for Assignment_id = 3
// from my output, i discovered that only one student submitted assignment_id = 3
let Assignment_id3_studentsInfo = [];
 for (let i=0; i< LearnerSubmissions.length; i++ ){
     if(LearnerSubmissions[i].assignment_id ==3){
        Assignment_id3_studentsInfo.push(LearnerSubmissions[i]);
     }   
 }
 console.log(Assignment_id3_studentsInfo); 

//output= (array of objects each containing Id, avg and assignment-number)
// avg =() total gotten ass1 + total gotten ass2 / total max supposed score) x 100%(in percentage)







/*
function getLearnerData(course, ag, submissions) {
  // here, we would process this data to achieve the desired result.
  const result = [
    {
      id: 125,
      avg: 0.985, // (47 + 150) / (50 + 150)
      1: 0.94, // 47 / 50
      2: 1.0, // 150 / 150
    },
    {
      id: 132,
      avg: 0.82, // (39 + 125) / (50 + 150)
      1: 0.78, // 39 / 50
      2: 0.833, // late: (140 - 15) / 150
    },
  ];

  return result;
}

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

console.log(result);
*/







/*

function getLearnerData(course, ag, submissions) {

    
 
      here, we would process this data to achieve the desired result.
  
  
      2. convert it into array of object where you have a key called id
      then value be studendid -> [{id:125},{id:132}]
  
      
  
      4. we need to calculate the grade
      go every student and match assignment using id to find points points_possible
      you just divide the score by points points_possible
      -> [{id:125,1:0.94,2:1.0}]
      avg (add assignment scores together )/ (points possible)
      remove not due assignments
  
      const result = [
        {
          id: 125,
          avg: 0.985, // (47 + 150) / (50 + 150)
          1: 0.94, // 47 / 50
          2: 1.0, // 150 / 150
        },
        {
          id: 132,
          avg: 0.82, // (39 + 125) / (50 + 150)
          1: 0.78, // 39 / 50
          2: 0.833, // late: (140 - 15) / 150
        },
      ];
  
    
   
    // let result = [];
    // write some code that makes results like that
    // for (let i = 0; i < submissions.length; i++) {
    //   //
    // }
    // result [125,125,125,32,32]
    // return result;
  }
    */
