const questions = Array.from(document.querySelectorAll('.questions'));
const answersDiv = Array.from(document.querySelectorAll('.answersDiv'));

questions.forEach((question, i) => {
  question.addEventListener('click', () => {
    answersDiv[i].classList.toggle('answersDiv');
  });
})

