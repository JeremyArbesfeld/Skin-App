var myPhoto = new ReactiveVar();

Template.header.events({
  'click #google': function () { 
    if (Meteor.user()) { 
      Router.go("/profilePage"); 
    } else { 
      Meteor.loginWithGoogle(); 
    }
  }
});

Template.home.helpers ({ 
  currentPhoto: function () {
    return myPhoto.get();
  }
});  

Template.home.events ( {
  'click #rash': function () { 
    Router.go("questions", { type: "rash" });
  },
  'click #mole': function () {
    Router.go("questions", { type: "mole" });
  },

  'click #picture': function () {
    MeteorCamera.getPicture({ width: 400, height: 300, quality: 50}, 
      function (err, data) {
        if (err) {
          console.log(err);
          return;
        }

        // do stuff with data
        myPhoto.set(data);
    });
  }

}); 

Template.question.events ({ 
  'click #yes': function () {
    Questions.update({_id: this._id}, 
      { $set: {state: "yes"} } 
    );
  },

  'click #no':  function () { 
    Questions.update({_id: this._id}, 
      { $set: {state: "no"} }
    );
  },
});

Template.question.helpers ({ 
  no: function() {
    return Questions.findOne({_id: this._id}).state === "no"; 
  },
  yes: function() { 
    return Questions.findOne({_id: this._id}).state === "yes"; 
  }
});  

Template.questionPage.events( {
  'click #submit': function () {
    Router.go("resultPage", { type: this.type });
  }, 
});

Template.resultPage.helpers({
  yesMessage: function () {
    if (90 <= this.yesCount) {
      return "You should be seen immediately!"; 
    } else if (65 <= this.yesCount) { 
      return "You should be seen within 1 day!"; 
    } else if (40<= this.yesCount) { 
      return "You should be seen within 2 days!"; 
    } else if (20<= this.yesCount) { 
      return "You should be seen within 5 days!"; 
    } else if (10<= this.yesCount) { 
      return "You should be seen within 1 week!"; 
    } else { 
      return "Call your dermatologist or primary care physician."; 
    }
  }, 

  body: function () { 
    var userName = "";

    var firstLine = "";
    if (Meteor.user()) {
      userName = Meteor.user().profile.name;
      firstLine = "Hi, this is " + userName + "" + ".\n";
    }
    if (90 <= this.yesCount) { 
      return firstLine + "I need to be seen immeadiately!"; 
     
    } else if (65 <=this.yesCount) {
      return firstLine + "I need to be seen within 1 day!"; 
     
    } else if (40 <= this.yesCount) { 
      return firstLine + "I need to be seen within 2 days!"; 
     
    } else if (20 <= this.yesCount) { 
      return firstLine + "I need to be seen within 5 days!"; 
     
    } else { 
      return firstLine + "I have dermatologic symptoms and am unsure of their urgency."; 
   }
  }
})   






