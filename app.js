// get Elements from the DOM
const questions = Array.from(document.querySelectorAll('.questions'));
const answersDiv = Array.from(document.querySelectorAll('.answersDiv'));
// looping through questions
questions.forEach((question, index) => {
  // adding click event on each question
  question.addEventListener('click', (e) => {
    const clickedQ = e.currentTarget;
    const associatedAnswer= answersDiv[index];
    // visible answer state
    const isAnswerVisible = associatedAnswer.classList.contains('show-answer');

    // Toggle visibility of the associated answer
    if (isAnswerVisible) {
      // Hide answer
      associatedAnswer.classList.remove('show-answer');
    } else {
      // Hide all other answers before displaying the clicked answer
      answersDiv.forEach(answer => {
        answer.classList.remove('show-answer');
      });
       // Display the answer
      associatedAnswer.classList.add('show-answer');
    }
  });
});
