const faq = document.querySelector(".faq");
const questionLines = document.querySelectorAll(".question-line");

questionLines.forEach((questionLine) =>
  questionLine.addEventListener("click", function (e) {
    const answer = questionLine.parentNode.children[1];
    const question = questionLine.children[0];
    answer.classList.toggle("hidden");
    question.classList.toggle("bolden");
  })
);
// faq.addEventListener("click", function (e) {
//   if (!e.target.classList.contains("arrow")) return;
//   const arrow = e.target;
//   const answer = e.target.parentNode.parentNode.children[1];
//   answer.classList.toggle("hidden");
//   arrow.classList.toggle("invert");
// });
