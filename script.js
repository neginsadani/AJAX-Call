"use strict";

function createCard(adviceData) {
  document.getElementById("quoteContent").innerText = adviceData.content;
  document.getElementById("quoteAuthor").innerText = `— ${
    adviceData.author || "unknown"
  }`;
}

function fetchRandomQuote() {
  const request = new XMLHttpRequest();
  request.open("GET", "https://api.quotable.io/quotes/random");
  request.send();

  request.addEventListener("load", function () {
    const response = JSON.parse(request.responseText);
    const { content, author } = response;
    createCard({ content, author });
  });
}

fetchRandomQuote();

document
  .getElementById("newQuoteButton")
  .addEventListener("click", fetchRandomQuote);
