import appointment from "./appointment" 

const notificationWorkerFactory = function() {
  return {
    run: function() {
        //appointment.sendNotifications(); 
    },
  };
};

export default notificationWorkerFactory();