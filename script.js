const faqList = document.querySelectorAll(".faq-question");

const toggleAnswer = (question) => {
  answer = question.nextElementSibling;
  if (question.classList.contains("active")) {
    question.classList.toggle("active");
    answer.classList.toggle("active");
  } else {
    faqList.forEach((question) => {
      question.classList.remove("active");
      question.nextElementSibling.classList.remove("active");
    });
    question.classList.toggle("active");
    answer.classList.toggle("active");
  }
};

faqList.forEach((question) => {
  question.addEventListener("click", () => toggleAnswer(question));
});
