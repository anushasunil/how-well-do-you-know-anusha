const readlineSync = require('readline-sync');
const chalk = require('chalk');

var playerName = readlineSync.question("what's your name? ");
console.log("Welcome, ", playerName, " lets see how much do you know about me! e.e ");

var score = 0;

var qnaList = [
	{
		question: "Where do I live? ",
		answer: "Thane"
	},
	{
		question: "What is my fav color? ",
		answer: "purple"
	},
	{
		question: "What is my fav food item? ",
		answer: "Shawarma"
	},
	{
		question: "What is my nickname? ",
		answer: "nothing"
	},
	{
		question: "Who is my bestfriend? ",
		answer: "I wont let y'all win"
	}
]

function play(ques, answ) 
{
	if(answ.toLowerCase() === ques.answer.toLowerCase())
	{
		console.log(chalk.yellow("yayy! correct! :D "));
		score = score + 1;
	}
	else
	{
		console.log("wrong-- :( ");
	}
	console.log("Current Score: ", score);
	console.log("______________________________");
}

for(var i=0; i < qnaList.length; i = i + 1)
{
	play(qnaList[i], readlineSync.question(qnaList[i].question))
}
console.log("So.... your final score is: ",score);