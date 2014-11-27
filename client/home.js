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