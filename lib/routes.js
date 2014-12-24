Router.configure({
  layoutTemplate: 'ApplicationLayout'
});

Router.route('/', function () {
  this.render('home');
}); 

Router.route('/profilePage', function () { 
	this.render('profilePage');
})

Router.route('/image', function () { 
  this.render('image', {
    data: function () {
      return Session.get("VIEW_PICTURE");
    }
  });
})

Router.route('/:type/questions/', function () {
	var type = this.params.type;
	var questions = Questions.find({type: this.params.type});
  this.render('questionPage', { 
  	data: function () {
  		return {
  			questions: questions,
  			type: type
  		}
  	}
  });
}, { 
	name: "questions"
});

Router.route('/:type/:yesCount/resultPage/', function () {
	var questions = Questions.find({type: this.params.type}).fetch();
  var yesCount = this.params.yesCount;

	this.render('resultPage', { 
		data: function () {
			return {
				yesCount: yesCount,
        questions: questions
			}
		}
	});
}, {
	name: "resultPage"
});
