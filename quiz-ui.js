Quiz.prototype.runQuizUI = function () {

  var quiz = this;

  var quizUI = {
    displayNext : function () {
      if (quiz.hasEnded()) {
        this.displayFinalScore();
      } else {
        this.displayQuestion();
        this.displayChoices();
        this.displayProgress();
        this.displayScoreCounter();
      }
    },

    displayQuestion : function () {
      this.populateIdWithHTML("question", quiz.getCurrentQuestion().question);
    },

    displayChoices : function () {
      var choices = quiz.getCurrentQuestion().choices;
      for (var i = 0; i < choices.length; i++) {
        this.populateIdWithHTML("choice" + i, choices[i]);
        this.answerHandler("button" + i, choices[i]);
      }
    },

    displayProgress : function () {
      var progressHTML = "Question " + (quiz.currentQuestionIndex + 1);
      progressHTML += "  of " + quiz.questions.length;
      this.populateIdWithHTML("progress", progressHTML);
    },

    displayScoreCounter : function () {
      var scoreCounterHTML = "Score: " + quiz.score + "/" + quiz.questions.length;
      this.populateIdWithHTML("scoreCounter", scoreCounterHTML);
    },

    displayFinalScore : function () {
      var quizCompletedHTML = '<h1>Quiz Completed</h1>';
      quizCompletedHTML += '<h2>You scored ' + quiz.score;
      quizCompletedHTML += ' out of ' + quiz.questions.length + '</h2>';
      this.populateIdWithHTML('quiz', quizCompletedHTML);
    },

    populateIdWithHTML : function (id, string) {
      var element = document.getElementById(id);
      element.innerHTML = string;
    },

    answerHandler : function (id, answer) {
      var UI = this;
      var button = document.getElementById(id);
      button.onclick = function () {
        quiz.checkAnswer(answer);
        UI.displayNext();
      };
    }
  };

  quizUI.displayNext();

};
