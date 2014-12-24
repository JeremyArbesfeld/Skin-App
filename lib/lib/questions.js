Questions = new Meteor.Collection(null);

var moleQuestions = [ 
  { prompt: "Is it a new growth or mole?", 
    points: 14
  }, 
  { prompt: "Has the growth or mole changed recently?",
    points: 13 
  },
  {
    prompt: "Have you ever been diagnosed with skin cancer?",
    points: 12
  },
  {
    prompt: "Is it bleeding?", 
    points: 11 
  },
  { prompt: "Is it painful?", 
    points: 10 
  }, 
  { 
    prompt: "Is it changing color?", 
    points: 9 
  }, 
  { 
    prompt: "Is it itchy?", 
    points: 8 
  }, 
  { 
    prompt: "Is it growing rapidly?", 
    points: 7 
  }, 
  { 
    prompt: "Does the growth or mole have an irregular border?", 
    points: 6 
  },
  { 
    prompt: "Is it larger than the size of a pencil eraser?", 
    points: 5 
  }, 
  { 
    prompt: "Do you have a history of blistering sunburns?", 
    points: 4 
  }, 
  { 
    prompt: "Do you have a history of indoor tanning?", 
    points: 3 
  }, 
  { 
    prompt: "Do you spend time sunbathing/getting suntanned?", 
    points: 2 
  }, 
  { 
    prompt: "Do you have a family history of skin cancer?", 
    points: 1 
  }

]; 

var rashQuestions = [ 
  { prompt: "Is it a new rash?", 
    points: 14
  }, 
  {
    prompt: "Is the rash/eruption painful?", 
    points: 13 
  }, 
  { 
    prompt: "Do you have a fever?", 
    points: 12 
  }, 
  { 
    prompt: "Is the rash/eruption red?", 
    points: 11 
  }, 
  { 
    prompt: "Is there any purlence (white, soft pus)?", 
    points: 10 
  }, 
  {
    prompt: "Are you experiencing itching?", 
    points: 9 
  }, 
  { 
    prompt: "Is there a red streak associated with the rash?", 
    points: 8
  }, 
  { 
    prompt: "Do you have an expanding target-like lesion?", 
    points: 7 
  }, 
  {
    prompt: "Do you have a history of a recent insect bite or tick bite?", 
    points: 6 
  }, 
  { 
    prompt: "Are you taking any new medications?", 
    points: 5 
  }, 
  { 
    prompt: "Do you have a suppressed immune system?", 
    points: 4 
  },
  { 
    prompt: "Have you recently been gardening or hiking?", 
    points: 3 
  }, 
  { 
    prompt: "Do you have any other family members with similar symptoms?", 
    points: 2 
  }, 
  { 
    prompt: "Have you travelled recently?", 
    points: 1 
  }

]; 

_.each(moleQuestions, function (question) {
  Questions.insert(_.extend({}, question, {type: "mole", state: "none"}));
});

_.each(rashQuestions, function (question) {
  Questions.insert(_.extend({}, question, {type: "rash", state: "none"}));
});