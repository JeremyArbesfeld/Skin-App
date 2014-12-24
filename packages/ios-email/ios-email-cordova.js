IosEmail = {}

Meteor.startup(function () {
	var emailComposer = cordova.require('emailcomposer.EmailComposer')
	IosEmail.show = emailComposer.show;
})