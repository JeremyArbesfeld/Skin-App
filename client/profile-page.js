Template.profilePage.events ( {
  'click #signout': function () { 
  	Meteor.logout(function() { 
  		Router.go("/"); 
  	}) 
  }
}) 






