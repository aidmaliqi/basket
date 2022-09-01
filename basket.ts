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
  },
  {
    id: 2,
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    id: 3,
    quote: "Get busy living or get busy dying.",
    author: "Stephen King",
  },
  {
    id: 4,
    quote: "You only live once, but if you do it right, once is enough.",
    author: "Mae West",
  },
];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/quotes", (req, res) => {
  res.send(quotes);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
