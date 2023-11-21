// get Elements from the DOM
const questions = Array.from(document.querySelectorAll('.questions'));
const answersDiv = Array.from(document.querySelectorAll('.answersDiv'));

// looping through questions
questions.forEach((question, index) => {
  // adding click event on each question
  question.addEventListener('click', (e) => {
    const clickedQ = e.currentTarget;
    // button in question thats clicked
    const associatedButton = question.querySelector('.arrowButton');
    associatedButton.classList.toggle('animate-upsideDown');

    const associatedAnswer= answersDiv[index];
    // visible answer state
    const isAnswerVisible = associatedAnswer.classList.contains('show-answer');

    // hide all other answers before displaying the clicked answer
    answersDiv.forEach(answer => answer.classList.remove('show-answer'));
    // font weight set to 'normal' to all question titles
    questions.forEach(q => q.style.fontWeight = 'normal');
   
    if (!isAnswerVisible) {
      // Display the answer
      associatedAnswer.classList.add('show-answer');
      // boldness to question question title
      clickedQ.style.fontWeight = '700';
    }  
  });
});
