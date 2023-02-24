const questions = document.querySelectorAll(".sectionten__question");

questions.forEach((question, index) => {
  const answer = question.querySelector(".sectionten__answer");
  const arrow = question.querySelector(".sectionten__arrow");
  const isActive = question.classList.contains("active");

  // Set first question as active by default
  if (index === 0 || isActive) {
    question.classList.add("active");
  }

  if (isActive) {
    answer.style.display = "block";
    arrow.classList.add("up");
  }

  question.addEventListener("click", () => {
    // Close all other answers and arrows
    questions.forEach((q) => {
      if (q !== question) {
        q.classList.remove("active");
        q.querySelector(".sectionten__answer").style.display = "none";
        q.querySelector(".sectionten__arrow").classList.remove("up");
      }
    });

    // Toggle answer display and arrow direction
    if (question.classList.contains("active")) {
      question.classList.remove("active");
      answer.style.display = "none";
      arrow.classList.remove("up");
    } else {
      question.classList.add("active");
      answer.style.display = "block";
      arrow.classList.add("up");
    }
  });
});
