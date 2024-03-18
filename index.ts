import inquirer from "inquirer";

 const answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstNumber" },
  { message: "Enter second number", type: "number", name: "secondNumber" },
//   { message: "Enter third number", type: "number", name: "thirdNumber" },
  {
    message: "select one of the operator to perform operation",
    type: "list",
    name: "operator",
    choices: ["addition", "subtractions", "multiplication", "division"],
  }
]);
// Condition Statement (if , else)
if (answer.operator === "addition") { 
  console.log 
      (answer.firstNumber +
      answer.secondNumber)} 
else if (answer.operator === "subtractions")
    {console.log 
        (answer. firstNumber -
        answer.secondNumber )}
else if  (answer.operator === "multiplication")
        {console.log 
    //           // "Your value is" +
        (answer. firstNumber *
         answer.secondNumber )}
else if  (answer.operator === "division")
{console.log 
//           // "Your value is" +
(answer. firstNumber /
 answer.secondNumber )}
