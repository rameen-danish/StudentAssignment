#! /usr/bin/env node
                        //1.Miles to Kilometers Converter
// This program converts miles into kilometers
console.log("\n \t \t  *** Miles into Kilometers Converter ***");

let miles = 130;
let kilometers = miles * 1.60934
console.log(`The distance of ${miles} miles is equal to ${kilometers} km.` );

                       //2.Evaluating a number game
//This program Evaluates a number , you can guess a number then it will compare with a dynmaic number and print that your guess number is equal or greater or less with the dynamic number.
console.log("\n \t \t  *** A number game*** ");
import inquirer from "inquirer" ;
const number = await inquirer.prompt(
    {
        name:'num',
        type:"number",
        message:"Please Enter a number!"
    }
);
let dynamicNumber = Math.floor(Math.random()*100) ;
if(number.num === dynamicNumber){
    console.log(`User number:${number.num} is equal to Dynamic number:${dynamicNumber}`);
}
else if(number.num > dynamicNumber){
    console.log(`User number:${number.num} is greater than Dynamic number:${dynamicNumber}`);
}
else if(number.num < dynamicNumber){
    console.log(`User number:${number.num} is less than Dynamic number:${dynamicNumber}`);
}

                                 //3.Friend checker game
//This program takes a input from user, then check the user name that she is your known friend or not .

console.log("\n \t \t  *** Friend Checker Game ***");
import friendInquirer from "inquirer";                             
const name = await friendInquirer.prompt(                           //takes input from user
    {
        name:'userName',
        type:'input',
        message:"Please Enter your name : \n"
    }
);
switch(name.userName){                                      
    case "Rameen":
        console.log(`Hello ${name.userName}! , You are my known friend.`);
        break;
    case "Areeba":
        console.log(`Hello ${name.userName}! , You are my known friend.`);
        break;
    case "Zaeema":
        console.log(`Hello ${name.userName}! , You are my known friend.`);
        break;    
    default :
    console.log("Sorry ! I Don't recognize , You are not my friend!");
    break;
}

                         //4.Functions
// This program set 2 numbers, then call a function with these two number variables as an arguement and console it .

console.log("\n \t \t  *** Function ***");
function showNumbers(num1:number,num2:number){
    console.log(`First Number is : ${num1} \nSecond Number is : ${num2}`);
}
console.log("\t First Call");
let num1 = 15;
let num2 = 20;
showNumbers(num1,num2);

console.log("\t Second Call");
let num3 = 5;
let num4 = 10;
showNumbers(num3,num4);

                            //5.Calculator project using function:
//This program add and subtract values thorough function 
console.log("\n \t \t  *** Calculator using Function *** ");

let number1 = 10;
let number2 = 5;
let operator = "+";
function calculator(number1:number,number2:number,operator:string){                  //Function declaration
    if(operator == "+")
        return (number1 + number2);
    else if(operator == "-")
        return (number1 - number2);
    else
        return ("Invalid Operator");
}
let result = calculator(number1,number2,operator);                  //Function calling for + operator
console.log(`${number1} ${operator} ${number2} = ${result}`);

operator = "-";
result = calculator(num1,num2,operator);                            //function caling for - operator
console.log(`${number1} ${operator} ${number2} = ${result}`);

                       //6.Anonymous functions
//in this program we print an arguement through an anonymous function and normal function
console.log("\n \t \t  *** Anonymous Function ***");
let printAnonymousFuncArgument = function(value:any){              //Anoymous function declaration
      console.log(value);
}
printAnonymousFuncArgument("I am a Developer");                    //Anoymous function calling

console.log("\n \t \t  *** Normal Function ***");                      //Normal function declaration
function printNormalFuncArgument(value:any){
    console.log(value);
}
printNormalFuncArgument("I wants to learn programming languages")            //Normal function calling