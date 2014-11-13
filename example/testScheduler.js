var scheduler = require('./aquajs-cli-scheduler.js');
var config = require('./scheduler-conf.json');
var cronMethods = require('./cron-methods.js');

scheduler.init(config,cronMethods);
scheduler.enableSchedulerUI(app);
scheduler.schedule();
