#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.bgGreenBright("Welcome to y4c5-countdown-timer Application."));
const displayTimer = function (timeLeft) {
    process.stdout.clearLine(0);
    process.stdout.cursorTo(0);
    process.stdout.write(chalk.blueBright.bold("\t  Time Left:" + timeLeft));
};
const startTimer = function (duration) {
    let timeLeft = duration;
    console.log(chalk.yellowBright.bold("\t Your Countdown Timer has Started"));
    console.log(chalk.bold("-".repeat(40)));
    displayTimer(timeLeft);
    const timerInterval = setInterval(function () {
        timeLeft--;
        displayTimer(timeLeft);
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            console.log("\n" + chalk.redBright.bold("\n\t    Time's up!"));
            console.log(chalk.bold("-".repeat(40)));
            console.log(chalk.italic.bgBlackBright("Your Countdown has ended.Thanks for using y4c5-countdown-timer Application.Hope you liked it."));
        }
    }, 1000);
};
const main = async function () {
    const answers = await inquirer.prompt([
        {
            type: "input",
            name: "countdownDuration",
            message: "Enter the duration of the countdown timer (in seconds only):",
            validate: function (value) {
                const duration = parseInt(value);
                return !isNaN(duration) && duration > 0 ? true : (chalk.redBright("Please enter a valid number."));
            }
        }
    ]);
    let duration = parseInt(answers.countdownDuration);
    startTimer(duration);
};
main();
