/**
 * Cron configuration for the agenda scheduler
 * developer can specify the cron job details which will be used by aquajs-scheduler
 * cron types can be single or multiple occurrence
 */


module.exports = {
    getMyEmailReport :  function(job, done) {
    var data = job.attrs.data;
    console.log("Get my Email Report"+data.from);
    jobCompletion();
    done();
    },
    fetchOrderStatus :  function(job, done) {
        console.log("Fetching the Order Details");
        jobCompletion();
        done();
    }
};
function jobCompletion(){
    console.log("Job Scheduler on Cron Args is Completed ");
}