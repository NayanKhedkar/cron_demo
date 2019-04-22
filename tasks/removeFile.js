const fs = require('fs');
const chalk = require('chalk');
const filePath = "./testfile.txt";
module.exports = () => {
    fs.unlink(filePath, err => {
        if (err) {
            console.error(chalk.red('file deleting error' + err.stack));
        };
        console.log(chalk.green('file succesfully deleted'));
    });
};