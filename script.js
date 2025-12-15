const questions = [
  "Given the choice of anyone in the world, whom would you want as a dinner guest?",
  "Would you like to be famous? In what way?",
  "Before making a phone call, do you ever rehearse what you are going to say?",
  "What would constitute a perfect day for you?",
  "When did you last sing to yourself?",
  "What is something absurdly specific that makes you emotional?",
  "What is a thought you’ve had that you’ve never told anyone?",
  "If we were strangers on a train, what would you assume about me?"
];

let index = 0;

const questionEl = document.getElementById("question");
const nextBtn = document.getElementById("next");

questionEl.addEventListener("click", () => {
  questionEl.textContent = questions[index];
});

nextBtn.addEventListener("click", () => {
  index = (index + 1) % questions.length;
  questionEl.textContent = "click me";
});
