import express from "express";
const cors = require("cors");
import { quotesData, authors } from "./data";

const app = express();
app.use(cors());
app.use(express.json());
const port = 4000;

let quotes = quotesData;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/authors", (req, res) => {
  let specificAuthors = authors;

  if (req.query.author) {
    
    specificAuthors = specificAuthors.filter(
      //@ts-ignore
      (item) => item.author.toLowerCase().includes(req.query.author.toLowerCase())
    );
  }
  res.send(specificAuthors);
});

app.post("/quotes", (req, res) => {
  let errors: string[] = [];

  if (typeof req.body.quote !== "string")
    errors.push("you dont have a quote or your quote is not string");
  else if (typeof req.body.author !== "string")
    errors.push("your quote doesnt have an author or is not a string");
  else if (typeof req.body.authorId !== "number")
    errors.push(
      "your author doesnt have an authorId or authorId is not a number"
    );
  if (errors.length === 0) {
    let newQuote = {
      id: quotes[quotes.length - 1].id + 1,
      quote: req.body.quote,
      authorId: req.body.authorId,
    };
    quotes.push(newQuote);
    res.send(newQuote);
  } else {
    res.status(404).send({ errors: errors });
  }
});

app.get("/quotes", (req, res) => {
  let specificQuotes = quotes;
  if (req.query.authorId) {
    specificQuotes = specificQuotes.filter(
      (item) => item.authorId === Number(req.query.authorId)
    );
  }
  res.send(specificQuotes);
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

app.delete("/quotes/:id", (req, res) => {
  const id = Number(req.params.id);
  const match = quotes.findIndex((item) => item.id === id);
  if (match > -1) {
    quotes = quotes.filter((item) => item.id !== id);
    res.send(`you deleted the quote with id ${id}`);
  } else {
    res.status(404).send({ error: "quote not found." });
  }
});

app.patch("/quotes/:id", (req, res) => {
  const id = Number(req.params.id);
  const match = quotes.find((item) => item.id === id);

  if (match) {
    if (req.body.quote) {
      match.quote = req.body.quote;
    }
    if (req.body.authorId) {
      match.authorId = req.body.authorId;
    }
    res.send(match);
  } else {
    res.status(404).send({ error: "match not found" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
