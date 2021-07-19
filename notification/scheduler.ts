import moment from 'moment'
import Cron from 'cron';
import notificationsWorker from './notification-worker'


const schedulerFactory = function() {
  return {
    start: function() {
      new Cron.CronJob('* * * * *', function() {
        console.log('Running Send Notifications Worker for ' +
          moment().format());
        notificationsWorker.run();
      }, null, true, '');
    },
  };
};

export default schedulerFactory();