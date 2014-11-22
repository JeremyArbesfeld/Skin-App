var questionType = new ReactiveVar("none");
var resultPage = new ReactiveVar(false);
var myPhoto = new ReactiveVar();

var moleQuestions = [ 
  { prompt: "Is it a new growth or mole?", 
    state: new ReactiveVar("none"),
    points: 14
  }, 
  { prompt: "Has the growth or mole changed recently?",
    state: new ReactiveVar("none"),
    points: 13 
  },
  {
    prompt: "Have you ever been diagnosed with skin cancer?",
    state: new ReactiveVar("none"), 
    points: 12
  },
  {
    prompt: "Is it bleeding?", 
    state: new ReactiveVar("none"), 
    points: 11 
  },
  { prompt: "Is it painful?", 
    state: new ReactiveVar("none"), 
    points: 10 
  }, 
  { 
    prompt: "Is it chaning color?", 
    state: new ReactiveVar("none"), 
    points: 9 
  }, 
  { 
    prompt: "Is it itchy?", 
    state: new ReactiveVar("none"), 
    points: 8 
  }, 
  { 
    prompt: "Is it growing rapidly?", 
    state: new ReactiveVar("none"), 
    points: 7 
  }, 
  { 
    prompt: "Does the growth or mole have an irregular border?", 
    state: new ReactiveVar("none"), 
    points: 6 
  },
  { 
    prompt: "Is it larger than the size of a pencil eraser?", 
    state: new ReactiveVar("none"), 
    points: 5 
  }, 
  { 
    prompt: "Do you have a history of blistering sunburns?", 
    state: new ReactiveVar("none"), 
    points: 4 
  }, 
  { 
    prompt: "Do you have a history of indoor tanning?", 
    state: new ReactiveVar("none"), 
    points: 3 
  }, 
  { 
    prompt: "Do you spend time sunbathing/getting suntanned?", 
    state: new ReactiveVar("none"), 
    points: 2 
  }, 
  { 
    prompt: "Do you have a family history of skin cancer?", 
    state: new ReactiveVar("none"), 
    points: 1 
  }

]; 

var rashQuestions = [ 
  { prompt: "Is it a new rash?", 
    state: new ReactiveVar("none"),
    points: 14
  }, 
  {
    prompt: "Is the rash/eruption painful?", 
    state: new ReactiveVar("none"), 
    points: 13 
  }, 
  { 
    prompt: "Do you have a fever?", 
    state: new ReactiveVar("none"), 
    points: 12 
  }, 
  { 
    prompt: "Is the rash/eruption red?", 
    state: new ReactiveVar("none"), 
    points: 11 
  }, 
  { 
    prompt: "Is there any purlence (white, soft pus)?", 
    state: new ReactiveVar("none"), 
    points: 10 
  }, 
  {
    prompt: "Are you experiencing itching?", 
    state: new ReactiveVar("none"), 
    points: 9 
  }, 
  { 
    prompt: "Is there a red streak associated with the rash?", 
    state: new ReactiveVar("none"), 
    points: 8
  }, 
  { 
    prompt: "Do you have an expanding target-like lesion?", 
    state: new ReactiveVar("none"),
    points: 7 
  }, 
  {
    prompt: "Do you have a history of a recent insect bite or tick bite?", 
    state: new ReactiveVar("none"), 
    points: 6 
  }, 
  { 
    prompt: "Are you taking any new medications?", 
    state: new ReactiveVar("none"), 
    points: 5 
  }, 
  { 
    prompt: "Do you have a suppressed immune system?", 
    state: new ReactiveVar("none"), 
    points: 4 
  },
  { 
    prompt: "Have you recently been gardening or hiking?", 
    state: new ReactiveVar("none"), 
    points: 3 
  }, 
  { 
    prompt: "Do you have any other family members with similar symptoms?", 
    state: new ReactiveVar("none"), 
    points: 2 
  }, 
  { 
    prompt: "Have you travelled recently?", 
    state: new ReactiveVar("none"), 
    points: 1 
  }

]; 

var currentQuestions = function () {
  if (questionType.get() === "mole") {
    return moleQuestions;
  } else if (questionType.get() === "rash") {
    return rashQuestions;
  } else {
    return [];
  }
};

Template.body.helpers ({ 
  questions: currentQuestions,

  hasQuestions: function () {
    return questionType.get() !== "none";
  },

  isResultPage: function () {
    return resultPage.get();
  },

  currentPhoto: function () {
    return myPhoto.get();
  }
});  

var yesCount;

Template.body.events( {
  'click #submit': function () { 
    console.log("cool");  

    yesCount = 0;
    _.each(currentQuestions(), function (question) {
      if (question.state.get() === "yes") { 
        yesCount = yesCount + question.points; 
      }
    }) 
    resultPage.set(true);
    console.log(yesCount)
  },

  'click #rash': function () { 
    questionType.set("rash");
  },
  'click #mole': function () {
    questionType.set("mole");
  },

  'click #home': function () {
    questionType.set("none");
    resultPage.set(false);
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
     console.log("hi"); 
     this.state.set("yes")
  },

  'click #no':  function () { 
    console.log("bye");
    this.state.set("no");  
  },
});

Template.question.helpers ({ 
  no: function() { 
    return this.state.get() === "no"; 
  },
  yes: function() { 
    return this.state.get() === "yes"; 
  }
});  

Template.resultPage.helpers({
  yesMessage: function () { 
    console.log(yesCount);
    if (90 <= yesCount) {
      return "You should be seen immediately!"; 
    } else if (65 <= yesCount) { 
      return "You should be seen within 1 day!"; 
    } else if (40<= yesCount) { 
      return "You should be seen within 2 days!"; 
    } else if (20<= yesCount) { 
      return "You should be seen within 5 days!"; 
    } else if (10<= yesCount) { 
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
      firstLine = "Hi, this is " + userName + ".\n";
    }
    if (90 <= yesCount) { 
      return firstLine + "I need to be seen immeadiately!"; 
    } 
    if (65 <== yesCount) {
      return firstLine + "I need to be seen within 1 day!"; 
    } 
    if (40 <= yesCount) { 
      return firstLine + "I need to be seen within 2 days!"; 
    } 
    if (20 <= yesCount) { 
      return firstLine + "I need to be seen within 5 days!"; 
    } 
    else { 
      return firstLine + "I have dermatologic symptoms and am unsure of their urgency."; 
  }
})   






