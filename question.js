function Question (question, choices, correctAnswer) {
  this.question = question;
  this.choices = choices;
  this.correctAnswer = choices[correctAnswer];
}

Question.prototype.isCorrectAnswer = function (answer) {
  return this.correctAnswer === answer;
};
