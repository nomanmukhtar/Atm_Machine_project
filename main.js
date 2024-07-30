import inquirer from "inquirer";
import chalk from "chalk";
// Initialize user balance and pin code 
let myBalance = 10000;
let myPin = 1234;
// print welcome message    
console.log(chalk.red("\n \twelcome Muhammad Noman - ATM Machine\n"));
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: chalk.yellow("\nEnter your pin\n"),
        type: "number"
    }
]);
// 12345 === 1234 - false
if (pinAnswer.pin === myPin) {
    console.log(chalk.green("\ncorrect pin code!!\n"));
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: chalk.yellow("\nplease select option\n"),
            type: "list",
            choices: ['withdraw', 'fast cash', 'check balance']
        }
    ]);
    console.log(operationAns);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: chalk.yellow("\nenter your amount\n"),
                type: "number"
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log(chalk.red("insufficient balance"));
        }
        // =, -= +=
        else {
            myBalance -= amountAns.amount;
            console.log(chalk.greenBright(`\nyour remaining balance is ${myBalance}\n`));
        }
    }
    else if (operationAns.operation === "fast cash") {
        let fast = await inquirer.prompt([
            {
                name: "fastcash",
                message: chalk.blueBright("\nselect the amount which you withdraw\n"),
                type: "list",
                choices: [1000, 2000, 3000, 5000]
            }
        ]);
        myBalance -= fast.fastcash;
        console.log(`you have successfully withdrawl ${fast.fastcash} \n your remaining balance is ${myBalance}`);
    }
    else if (operationAns.operation === "check balance") {
        console.log(chalk.bgGreen(`your remaining Balance is ${myBalance}`));
    }
}
else {
    console.log(chalk.red("incorrect pin code"));
}
