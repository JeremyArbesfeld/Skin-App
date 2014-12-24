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

Template.questionPage.created = function () {
  this.data.picture = new ReactiveVar();
};

Template.questionPage.helpers({
  currentPhoto: function () {
    return this.picture.get();
  }
});

Template.questionPage.events( {
  'click #submit': function () {
    var self = this;
    var questions = Questions.find({type: this.type}).fetch();
    var yesCount = 0;

    _.each(questions, function (question) {
      if (question.state === "yes") { 
        yesCount = yesCount + question.points; 
      }
    });

    var result = { 
      type: this.type, 
      formattedDate: (new Date).format('m/dd/yyyy'), 
      score: yesCount,
      picture: this.picture.get() 
    }; 

    Meteor.users.update({_id: Meteor.userId ()}, 
      {$push: {'profile.results': result}});

    Session.set("PICTURE", this.picture.get());
    Router.go("resultPage", { type: this.type, yesCount: yesCount });
  }, 

  'click #picture': function () {
    var self = this;
    MeteorCamera.getPicture({
      width: 300,
      height: 300,
      quality: 50
    }, function (error, data) {
      if (! error) {
        if (Meteor.isCordova) {
          self.picture.set(data);
        } else {
          this.picture.set(data);
        }
      }
    }, self);
  }
}); 
