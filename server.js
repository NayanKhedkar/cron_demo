const express = require("express");
const cron =require('./cron');
app = express();
const PORT = process.env.PORT || '3002';
app.listen(PORT, function(argument) {
	cron.setupTaskList();
    console.log('listning on port: ' + PORT);
}); 