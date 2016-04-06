// avoid 404 by sending user to root
FlowRouter.notFound = {
    action: function () {
        FlowRouter.go('/');
    }
};

//login
FlowRouter.route('/', {
    action: function () {
        if (Meteor.userId()) {
            FlowRouter.go('adminEventIndex');
        } else {
            BlazeLayout.render('login');
        }
    },
    name: "index" // optional

});

//event index
FlowRouter.route('/admin-dashboard/events/', {
    // do some action for this route
    action: function () {
        if (Meteor.userId()) {
            BlazeLayout.render('adminDashboardLayout', {main: "adminEventIndex"});
        } else {
            FlowRouter.go('login');
        }
    },

    name: "adminEventIndex" // optional
});