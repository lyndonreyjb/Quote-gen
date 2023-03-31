const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const quoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

let apiQuotes = [];

const loading = () => {
  loader.hidden = false;
  quoteContainer.hidden = true;
};

const complete = () => {
  quoteContainer.hidden = false;
  loader.hidden = true;
};

const newQuote = () => {
  loading();
  const random = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  authorText.textContent = random.author;
  quoteText.textContent = random.text;
  complete();
};

async function getQuotes() {
  loading();
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {}
}

quoteBtn.addEventListener("click", newQuote);

getQuotes();
