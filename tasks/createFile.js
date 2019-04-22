const fs = require('fs');
const chalk = require('chalk');
const filePath = "./testfile.txt";
module.exports = () => {
    fs.writeFile(filePath, 'Test file created', function(err) {
        if (err) {
            console.log(chalk.red('Error while creating file.' + err.stack));
        }
        console.log(chalk.blue('File is created successfully.'));
    });
};