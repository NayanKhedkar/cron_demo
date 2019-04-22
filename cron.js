/*let shell = require("shelljs");*/
const cron = require("node-cron");
const taskList = require('./taskconfig').taskList;


const setupTaskList = () => {
    taskList.forEach((task) => {
        let isValid = cron.validate(task.executeOn);
        console.log(isValid);
        cron.schedule(task.executeOn, function() {
            console.log("Running Task "+task.name);
            task.callback();
        });
        console.log(task);
    });
}

module.exports.setupTaskList = setupTaskList;


