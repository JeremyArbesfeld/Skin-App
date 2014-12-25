Questions = new Meteor.Collection(null);

var moleQuestions = [ 
  { prompt: "Is it a new growth or mole?", 
    points: 18
  }, 
  { prompt: "Has the growth or mole changed recently?",
    points: 18 
  },
  {
    prompt: "Have you ever been diagnosed with skin cancer?",
    points: 15
  },
  {
    prompt: "Is it bleeding?", 
    points: 18 
  },
  { prompt: "Is it painful?", 
    points: 15 
  }, 
  { 
    prompt: "Is it changing color?", 
    points: 11 
  }, 
  { 
    prompt: "Is it itchy?", 
    points: 10
  }, 
  { 
    prompt: "Is it growing rapidly?", 
    points: 18
  }, 
  { 
    prompt: "Does the growth or mole have an irregular border?", 
    points: 16 
  },
  { 
    prompt: "Is it larger than the size of a pencil eraser?", 
    points: 16 
  }, 
  { 
    prompt: "Do you have a history of blistering sunburns?", 
    points: 15
  }, 
  { 
    prompt: "Do you have a history of indoor tanning?", 
    points: 8
  }, 
  { 
    prompt: "Do you spend time sunbathing/getting suntanned?", 
    points: 4 
  }, 
  { 
    prompt: "Do you have a family history of skin cancer?", 
    points: 3
  }

]; 

var rashQuestions = [ 
  { prompt: "Is it a new rash?", 
    points: 25
  }, 
  {
    prompt: "Is the rash/eruption painful?", 
    points: 30 
  }, 
  { 
    prompt: "Do you have a fever?", 
    points: 10 
  }, 
  { 
    prompt: "Is the rash/eruption erythematous (red)?", 
    points: 30 
  }, 
  { 
    prompt: "Is there any purulence (white or yellow pus)?", 
    points: 10 
  }, 
  {
    prompt: "Are you experiencing itching?", 
    points: 10 
  }, 
  { 
    prompt: "Is there a red streak associated with the rash?", 
    points: 30
  }, 
  { 
    prompt: "Do you have an expanding target-like lesion?", 
    points: 30
  }, 
  {
    prompt: "Do you have a history of a recent insect bite or tick bite?", 
    points: 30
  }, 
  { 
    prompt: "Are you taking any new medications?", 
    points: 10
  }, 
  { 
    prompt: "Do you have a suppressed immune system?", 
    points: 10
  },
  { 
    prompt: "Have you recently been gardening, hiking, or at the beach?", 
    points: 20
  }, 
  { 
    prompt: "Is the rash/eruption blistering?", 
    points: 30
  }, 
  { 
    prompt: "Are you experiencing any burning or tingling sensation?", 
    points: 25 
  }

]; 

_.each(moleQuestions, function (question) {
  Questions.insert(_.extend({}, question, {type: "mole", state: "none"}));
});

_.each(rashQuestions, function (question) {
  Questions.insert(_.extend({}, question, {type: "rash", state: "none"}));
});