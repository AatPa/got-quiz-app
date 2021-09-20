var readlineSync = require('readline-sync');
var chalk = require('chalk'); 
var username = readlineSync.question("Please tell your Name! ");

console.log("Hi " + username + " Welcome to the Endgame ");
// var curScore = chalk.bold.brown;
var rightAns = chalk.bold.white.bgGreen;
var wrongAns = chalk.bold.bgRed;
var score = 0;

var highScore = {
  name : 'Aatish',
  hiscore : 4
}

function gotQuiz(ques,ans,userAns)
{
  if(userAns === ans)
  {
    console.log(rightAns('YaY!! Right Answer!!'));
    score++;
  }
  else
  {
    console.log(wrongAns('Ooops!! Wrong Answer!!!'));
    score--;
  }

  console.log(chalk.bold.underline.bgCyan('Your Current Score is '+score+ '!!'));
}


//array of options
var options =[

ques1options = ['Dougal','Vhagar','Rhaegal','Balerion'],
ques2options = ['Lyanna Mormont','Sans aStark','Ser Brienne of Tarth','Olenna Tyrell'],
ques3options = ['Jaqen HGar','Nymeria the direwolf','Hot Pie','Eddison Tollett'],
ques4options = ['Millipede','The Youre Making Me Very Cross(bow)','Scorpion','Mantis'],
ques5options = ['Ser Pounce','Maester Paw','Lady Claws','The Bastard']
]


//quizQues and Answers
var quizQues = [
  {
    ques:"Dany’s dragons are (or were) called Drogon, Viserion and ____?",
    ans:3
  },

  {
    ques:"Who said: 'I don’t plan on knitting by the fire while men fight for me'?",
    ans:1
  },

  {
    ques:'Which of these characters is dead?',
    ans:4
  },

  {
    ques:"What is the name of the giant dragon-slaying crossbow that failed to protect King’s Landing?",
    ans:3
  },

  {
    ques:"What was the Red Keep’s chief mouser (RIP) called?",
    ans:1
  }

  
]

//funtion call
for(var i=0,j=0;i<quizQues.length,j<options.length;i++,j++)
{
  var quizQ = quizQues[i]; 
  var userAns =  readlineSync.keyInSelect(options[j],quizQ.ques);
  gotQuiz(quizQ.ques,quizQ.ans,++userAns);
}

//HighScore comparision
console.log(chalk.bold.white.bgYellow('All time High Score is : '+ highScore.hiscore + " by " + highScore.name));

if(score > highScore.hiscore)
{
  console.log(chalk.magenta.bold.underline('Congrats!! You have beaten All Time High Score of '+  highScore.name));
  console.log(chalk.magenta.bold.underline("Send in the screenshot for updation,Thanks!!"));
}
else
if(score === highScore.hiscore)
{
  console.log(chalk.yellow.bold.underline('Congrats!! You have levelled All Time High Score of '+  highScore.name));
}
else
{
  console.log(chalk.cyan.bold.underline('Oops , You failed to beat the high score of '+  highScore.name + " by " + (highScore.hiscore - score) + " points"));
  console.log("Better Luck next time!!");
}
