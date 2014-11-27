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
