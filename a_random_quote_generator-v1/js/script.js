//This function generate a random quote
function getRandomQuote() {
  let randomNumber = Math.floor( Math.random() * quotes.length )

  randomQuote = quotes[randomNumber]
  return randomQuote
};

//This function add the quote to the html
function printQuote() {
  const randomQuote = getRandomQuote()
  let string = `<p class='quote'>${randomQuote.quote}</p><p class='source'>${randomQuote.source}`

  if (randomQuote.citation) {
    string += `<span class='citation'>${randomQuote.citation}</span>`
  }
  if (randomQuote.year) {
    string += `<span class='year'>${randomQuote.year}</span>`
  }
  if (randomQuote.tags) {
    string += `<span class='tags'>${randomQuote.tags}</span>`
  }

  string += `</p>`

  changeBackgroundColor()

  document.getElementById('quote-box').innerHTML = string; 
};

//This function change the background of the body
function changeBackgroundColor() {
  let x = document.body
  x.style.backgroundColor = x.style.backgroundColor == "black" ? "red" : "black";
}

//This function establishes the interval in which our functions will repeat
function interval() {
  setInterval(printQuote, 5000)
}

//This is the data that we use on this project.
const quotes = [
  {
    quote: `I won't wait.`,
    source: `--McKenzie Scott`,
    citation: ``,
    year: `2020`
  },
  {
    quote: `Optimism, pessimism, [forget] that; we're going to make it happen. As God is my bloody witness, I'm hell-bent on making it work.`,
    source: `--Elon Musk`,
    citation: `after the first three SpaceX rocket launches failed to reach orbit`,
    year: `2008`,
    tags: '#success'
  },
  {
    quote: `Kindness, kindness, kindness. I want to make a New Year's prayer, not a resolution. I'm praying for courage.`,
    source: `--Susan Sontag`,
    citation: ``,
    year: ``
  },
  {
    quote: `Stability and education are important. I'm not taking anything away from that -- but innovation is the real driver of progress.`,
    source: `--Bill Gates`,
    citation: `Rolling Stone interview`,
    year: `2014`
  },
  {
    quote: `If you make your bed every morning, you will have accomplished the first task of the day. It will give you a small sense of pride, and it will encourage you to do another task, and another, and another. ... If, by chance, you have a miserable day, you will come home to a bed that's made--that you made. And a made bed gives you encouragement that tomorrow will be better`,
    source: `--Admiral William McRaven`,
    citation: ``,
    year: ``,
    tags: '#goodhabits'
  },
  {
    quote: `I didn't see it then, but it turned out that getting fired from Apple was the best thing that could have ever happened to me. The heaviness of being successful was replaced by the lightness of being a beginner again, less sure about everything. It freed me to enter one of the most creative periods of my life.`,
    source: `--Steve Jobs`,
    citation: `Stanford speech`,
    year: `2005`
  },
  {
    quote: `The way to get started is to quit talking and begin doing.`,
    source: `--Walt Disney`,
    citation: ``,
    year: ``
  },
  {
    quote: `If you have a dream, you can spend a lifetime studying, planning, and getting ready for it. What you should be doing is getting started.`,
    source: `--Drew Houston`,
    citation: ` in his 2013 commencement address at MIT`,
    year: `2013`,
    tags: '#believe'
  },
  {
    quote: `There's a plaque on our wall that says we've sold over 65 million albums, and I don't feel I've accomplished anything. I feel like I'm just getting started.`,
    source: `--Eddie Van Halen`,
    citation: `in a 1996 interview for Guitar World magazine`,
    year: `1996`
  },
  {
    quote: `What we call the beginning is often the end / And to make an end is to make a beginning. / The end is where we start from.`,
    source: `--T.S. Elio`,
    citation: `Little Gidding`,
    year: `1946`
  }
];

//This is the trigger that call our functions on the data.
document.getElementById('load-quote').addEventListener("click", printQuote, false);
document.getElementById('load-quote').addEventListener("click", interval, false);





