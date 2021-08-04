import Appointment from "./appointment";

const notificationWorkerFactory = function () {
  return {
    run: function () {
      Appointment();
    },
  };
};

export default notificationWorkerFactory();
