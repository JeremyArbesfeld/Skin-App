Template.resultPage.helpers({
  yesMessage: function () {
    if (170 <= this.yesCount) {
      return "You should be seen immediately!"; 
    } else if (165 <= this.yesCount) { 
      return "You should be seen within 1 day!"; 
    } else if (145<= this.yesCount) { 
      return "You should be seen within 2 days!"; 
    } else if (135 <= this.yesCount) { 
      return "You should be seen within 3 days!"; 
    } else if (125 <= this.yesCount) { 
      return "You should be seen within 4 days!"; 
    } else if (105<= this.yesCount) { 
      return "You should be seen within 5 days!";
    } else if (100 <= this.yesCount) { 
      return "You should be seen within 6 days!";  
    } else if (85 <= this.yesCount) { 
      return "You should be seen within 7 days!"; 
    } else if (60 <= this.yesCount) { 
      return "You should be seen within 10 days!"; 
    } else if (30 <= this.yesCount) { 
      return "You should be seen within 12 days!"; 
    } else if (10 <= this.yesCount) { 
      return "You should be seen within 14 days!"; 
    } else { 
      return "Call your dermatologist or primary care physician."; 
    }
  }, 

})

Template.resultPage.events({
  'click #email': function () { 
    var emailText = "";
    if (Meteor.user()) {
      var userName = Meteor.user().profile.name;
      emailText += "<p>Hi, this is " + userName + "" + ".</p>"; 

    }

    if (90 <= this.yesCount) { 
      emailText += "<p>I need to be seen immeadiately!</p>"; 
     
    } else if (65 <=this.yesCount) {
      emailText += "<p>I need to be seen within 1 day!</p>"; 
     
    } else if (40 <= this.yesCount) { 
      emailText += "<p>I need to be seen within 2 days!</p>"; 
     
    } else if (20 <= this.yesCount) { 
      emailText += "<p>I need to be seen within 5 days!</p>"; 
     
    } else { 
      emailText += "<p>I have dermatologic symptoms and am unsure of their urgency.</p>"; 
   } 

   emailText += "<p>Here are the results of my test:</p>";

   emailText += "<ul>"
    var questions = this.questions;

     _.each(questions, function (question) { 
      var myState = question.state; 
      if (question.state === "none") { 
        myState = "no"; 
      }

      emailText += "<li>" + question.prompt + " " + myState + ".</li>"; 
    })

    emailText += "</ul>"

    var picture = Session.get("PICTURE");

    if (picture) {
      emailText += "<img src=\"" + picture + "\"/>";
    }

    IosEmail.show({
      to: '',
      subject: 'Urgency of Appointment',
      body: emailText,
      isHtml: true,
      attachments: [{
        mimeType: 'text/png',
        encoding: 'Base64',
        data: picture,
        name: 'image.png'
      }],
      onSuccess: function (winParam) { 
        console.log('EmailComposer onSuccess - return code ' + winParam.toString());
      },
      onError: function (error) {
        console.log('EmailComposer onError - ' + error.toString());
      }
    })
  }
})   






