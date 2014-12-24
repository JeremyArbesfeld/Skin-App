Template.profilePage.events ( {
  'click #signout': function () { 
  	Meteor.logout(function() { 
  		Router.go("/"); 
  	}) 
  },

  'click #delete': function () {
  	var deleteData = function () {
  		 Meteor.users.update({_id: Meteor.userId ()}, 
	      {$set: {'profile.results': [] }});
  	};

  	MeteorAlert.confirm('Are you sure you want to clear your data?', deleteData, 
  		'Clear Data', ['Cancel', 'OK']);
  }
});

Template.profilePage.helpers({
	results: function () {
		return Meteor.user() && Meteor.user().profile.results ? 
			Meteor.user().profile.results.reverse() : [];
	}
})

Template.result.events({
	'click': function () {
		Session.set("VIEW_PICTURE", this);
		Router.go('/image');
	}
})






