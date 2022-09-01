import express from "express";
const cors = require("cors");

const app = express();
app.use(cors());
const port = 4000;

const quotes = [
  {
    id: 1,
    quote: "The purpose of our lives is to be happy.",
    author: "Dalai Lama",
    age : 45
  },
  {
    id: 2,
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
    age: 34
  },
  {
    id: 3,
    quote: "Get busy living or get busy dying.",
    author: "Stephen King",
    age : 32,
  },
  {
    id: 4,
    quote: "You only live once, but if you do it right, once is enough.",
    author: "Mae West",
    age : 55
  },
];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/quotes" , (req, res) => {
   let specificQuotes = quotes
   if (req.query.age) {
    specificQuotes = specificQuotes.filter(item => item.age === Number(req.query.age))
   }
  res.send(specificQuotes)
})

app.get("/quotes", (req, res) => {
  res.send(quotes);
});

app.get("/quotes/:id", (req, res) => {
  const id = Number(req.params.id);
  const match = quotes.find((item) => item.id === id);

  if (match) {
    res.send(match);
  } else {
    res.status(404).send({ error: "Item not found." });
  }
});

app.get("/randomQuote", (req, res) => {
  var item = quotes[Math.floor(Math.random() * quotes.length)];
  res.send(item);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
