"use strict";

var Agenda = require('agenda'),
    agendaUI = require('agenda-ui');
/**
 * Aqua Scheduler framework Constructor
 * @api public
 */

var AquaJsScheduler = function () {
    console.log("Aqua Scheduler constructor");
};

/**
 * Aqua Scheduler framework initialization
 * @api public
 */

AquaJsScheduler.prototype.init = function (config, cronMethods) {
    var agenda,
        initConf = config.initConfig;
    this.config = config;
    this.cronMethods = cronMethods;
    if (undefined !== initConf) {
        agenda = new Agenda(initConf);
    }
    this.agenda = agenda;
}

AquaJsScheduler.prototype.getScheduler = function () {
    return this.agenda;
}
/**
 * Aqua Scheduler framework scheduling method
 * @api public
 */
AquaJsScheduler.prototype.schedule = function () {
    var jobList = this.config.jobList,
        agenda = this.agenda,
        cronMethods = this.cronMethods;
    for (var jobIndex in jobList) {
        var eachJob = jobList[jobIndex],
            jobDesc = eachJob.jobDesc,
            scheduledFunction = eachJob.scheduledFunction,
            cronMethods = cronMethods;
        if (undefined !== jobDesc && undefined !== scheduledFunction) {
            agenda.define(jobDesc, cronMethods[scheduledFunction]);
            var cronObj = eachJob.cron,
                mode = cronObj.mode;
            if (mode != undefined) {
                if ('every' === cronObj.mode) {
                    agenda.every(cronObj.expression, jobDesc, eachJob.jobData);
                } else if ('schedule' === mode) {
                    agenda.schedule(cronObj.expression, jobDesc, eachJob.jobData);
                }
            } else {
                throw new Error('JobName is mandatory, failed to initialize scheduler');
            }
        } else {
            throw new Error('JobDesc is mandatory, failed to initialize scheduler');
        }
    }
    agenda.start();
}

AquaJsScheduler.prototype.enableSchedulerUI = function (app) {
    app.use('/agenda-ui', agendaUI(this.agenda, {poll: 1000}));
}

AquaJsScheduler.prototype.cancelSingleJob = function (jobName) {
    this.agenda.cancel({name: jobName});
}

AquaJsScheduler.prototype.purgeJobs = function (jobName) {
    this.agenda.purge(function (err, numRemoved) {
    });
}

module.exports = new AquaJsScheduler();
