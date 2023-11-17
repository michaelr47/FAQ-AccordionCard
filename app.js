document.addEventListener("DOMContentLoaded", function () {
  const questions = Array.from(document.querySelectorAll(".questions"));
  const answersDiv = Array.from(document.querySelectorAll(".answersDiv"));

  // questions.forEach((question, i) => {
  for (const question of questions) {
    // let button = question.querySelector('.arrowButton');

    question.addEventListener("click", (e) => {
      // for (let i = 0; i < answersDiv.length; i++) {
      //   answersDiv[i].style.display = "none";
      // }

      const clickedQ = e.currentTarget;
      const associatedAnswer = clickedQ.nextElementSibling;
      const visibleAnswer = associatedAnswer.style.display === 'block';
      
      if (visibleAnswer) {
        associatedAnswer.style.display = 'none';
      }
      associatedAnswer.style.display = 'block';

      
    });
  }
});

// button.classList.remove('animate-upsideDown');
// })
// }
// let answersDiv1 = answersDiv[0];
// answersDiv1.style.display = 'block';
// let question1 = questions[0];
// let nexToQ1 = question1.nextElementSibling;
// console.log(nexToQ1);
