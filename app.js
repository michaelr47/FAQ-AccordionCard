const questions = Array.from(document.querySelectorAll('.questions'));
const answersDiv = Array.from(document.querySelectorAll('.answersDiv'));

questions.forEach((question, i) => {
  let button = question.querySelector('.arrowButton');
  console.log(button);
  question.addEventListener('click', () => {
    answersDiv[i].classList.toggle('answersDiv');
  });
})


