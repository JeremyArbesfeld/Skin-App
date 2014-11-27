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






