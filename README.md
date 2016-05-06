# Aqua Js Scheduler

Aqua JS Scheduler framework:

It is a light-weight job scheduling library for Node.js. It has a dependency on the mongodb.

Basic Features :

  - Scheduling with configurable priority, concurrency, and repeating;
  - Scheduling via cron or human readable syntax;
  - Event backed job queue that you can hook into;
  - Agenda-ui to view the cron jobs.

Example:
```javascript
var scheduler = require('./aqua-scheduler.js');
var config = require('./scheduler-conf.json');
var cronMethods = require('./cron-methods.js');
scheduler.init(config,cronMethods);
scheduler.enableSchedulerUI(app);
scheduler.schedule();
```