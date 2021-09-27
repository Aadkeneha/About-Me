var readlineSync = require('readline-sync');
var userName = readlineSync.question("What is your name? ");
console.log("welcome " + userName + " to 'Do You Know NEHA 😉'" );
console.log("*==========================*");
var score = 0

var qna=[
{question:"Is neha an introvert? ", answer:true},
{question:"Is neha lazy? ",answer:true},
{question:"Do neha owns any pet? ",answer:false},
{question:"Do neha like soothing songs? ",answer:true},{question:"Does neha dance? ",answer:true}]


function checkanswer(questions,answers){
  var que = readlineSync.keyInYN(questions)
  if (que === answers)
{
  console.log("You are right!!");
  score = score +1;
}
else{
  console.log("You are wrong!!");
}

}
for (var i=0;i<qna.length;i++){
  checkanswer(qna[i].question,qna[i].answer);
  console.log("------------------------");
}

console.log("Your score is : "+score );
console.log("*==========================*");
console.log("Top scorers are:");

var toppers =[
  {
    name: "Vanshita",
    topscore: 5
  }
]

console.log("*---------------*");
for (var i = 0; i < toppers.length; i++) {
  console.log("Name: ",toppers[i].name,"\r\nScore: ",toppers[i].topscore);
   console.log("---------------");
}
console.log("*---------------*");

console.log("If you scored highest points then send me a screenshot and then I'll update it in top scorers list.");

console.log("Thank you !! 😊");