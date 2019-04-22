/**
NOTE:-(*) repesents

*    *    *    *    *    *
┬    ┬    ┬    ┬    ┬    ┬
│    │    │    │    │    │
│    │    │    │    │    └> day of week (0 - 7) (0 or 7 is Sun)
│    │    │    │    └─────> month (1 - 12)
│    │    │    └──────────> day of month (1 - 31)
│    │    └───────────────> hour (0 - 23)
│    └────────────────────> minute (0 - 59)
└─────────────────────────> second (0 - 59, OPTIONAL)

Refer:https://www.npmjs.com/package/node-cron
**/


const createFile = require('./tasks/createFile');
const removeFile = require('./tasks/removeFile');

const taskList = [
    {
        name: "removeFile",
        executeOn:"10 12 16 * * *",//delete file on time 16:12:10 (4:12:10 PM)
        callback:removeFile
    },
    {
        name: "createFile",
        executeOn:"12 16 * * *", //create file on time 16:12 (4:12 PM)
        callback:createFile
    }

];
module.exports.taskList = taskList;