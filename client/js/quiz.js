function Quiz (questions) {
  this.questions = questions;
  this.currentQuestionIndex = 0;
  this.score = 0;
}

Quiz.prototype.checkAnswer = function (answer) {
  if (this.getCurrentQuestion().isCorrectAnswer(answer)) {
    this.score++;
  }
  this.currentQuestionIndex++;
};

Quiz.prototype.getCurrentQuestion = function () {
  return this.questions[this.currentQuestionIndex];
};

Quiz.prototype.hasEnded = function () {
  return this.currentQuestionIndex >= this.questions.length;
};
