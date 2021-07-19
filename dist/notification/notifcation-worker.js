"use strict";
const appointment = require("./appointment");
const notificationWorkerFactory = function () {
    return {
        run: function () {
            appointment.sendNotifications();
        },
    };
};
module.exports = notificationWorkerFactory();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZjYXRpb24td29ya2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbm90aWZpY2F0aW9uL25vdGlmY2F0aW9uLXdvcmtlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsTUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBRTdDLE1BQU0seUJBQXlCLEdBQUc7SUFDaEMsT0FBTztRQUNMLEdBQUcsRUFBRTtZQUNELFdBQVcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3BDLENBQUM7S0FDRixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUYsTUFBTSxDQUFDLE9BQU8sR0FBRyx5QkFBeUIsRUFBRSxDQUFDIn0=