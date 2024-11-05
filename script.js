const quoteOutput = document.querySelector(".quote-output");
const quoteButton = document.querySelector(".quote-btn");
const quoteNumber = document.querySelector(".quote-number");

const getQuote = function () {
  const request = new XMLHttpRequest();
  {
    request.open("GET", "https://api.adviceslip.com/advice");
    request.send();

    request.addEventListener("load", function () {
      console.log(this.responseText);

      const { slip } = JSON.parse(this.responseText);
      quoteOutput.innerHTML = slip.advice;
      quoteNumber.textContent = `#${slip.id}`;
    });
  }
};
quoteButton.addEventListener("click", getQuote);
