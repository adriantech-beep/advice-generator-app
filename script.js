const quoteOutput = document.querySelector(".quote-output");
const quoteButton = document.querySelector(".quote-btn");
const quoteNumber = document.querySelector(".quote-number");

const errorMessage = function () {
  quoteOutput.textContent = "Error fetching quote";
};

const getQuote = function () {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      const { slip } = data;
      quoteOutput.innerHTML = slip.advice;
      quoteNumber.textContent = `#${slip.id}`;
    })
    .catch((err) => {
      console.log(err);
      errorMessage();
    });
};
quoteButton.addEventListener("click", getQuote);
