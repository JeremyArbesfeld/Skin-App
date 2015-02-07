

Template.header.events({
  'click #google': function () { 
    if (Meteor.user()) { 
      Router.go("/profilePage"); 
    } else { 
      Meteor.loginWithGoogle();
      Router.go("/");
    }
  }
}); 
