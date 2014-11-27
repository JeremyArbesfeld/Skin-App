Router.configure({
  layoutTemplate: 'ApplicationLayout'
});

Router.route('/', function () {
  this.render('home');
}); 

Router.route('/profilePage', function () { 
	this.render('profilePage');
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

Router.route('/:type/resultPage/', function () {
	var questions = Questions.find({type: this.params.type}).fetch();
  var yesCount = 0;

  _.each(questions, function (question) {
    if (question.state === "yes") { 
      yesCount = yesCount + question.points; 
    }
  });

	this.render('resultPage', { 
		data: function () {
			return {
				yesCount: yesCount
			}
		}
	});
}, {
	name: "resultPage"
});
