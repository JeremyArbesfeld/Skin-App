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
    var emailText = "";
    if (Meteor.user()) {
      var userName = Meteor.user().profile.name;
      emailText += "Hi, this is " + userName + "" + ".%0A"; 

    }

    if (90 <= this.yesCount) { 
      emailText += "I need to be seen immeadiately!"; 
     
    } else if (65 <=this.yesCount) {
      emailText += "I need to be seen within 1 day!"; 
     
    } else if (40 <= this.yesCount) { 
      emailText += "I need to be seen within 2 days!"; 
     
    } else if (20 <= this.yesCount) { 
      emailText += "I need to be seen within 5 days!"; 
     
    } else { 
      emailText += "I have dermatologic symptoms and am unsure of their urgency."; 
   } 

   emailText += "%0A%0AHere are the results of my test:%0A";

    var questions = this.questions;

     _.each(questions, function (question) { 
      var myState = question.state; 
      if (question.state === "none") { 
        myState = "no"; 
      }

      emailText += question.prompt + " " + myState + ".%0A"; 
    })

   return emailText;
  }
})   






