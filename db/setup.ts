import Database from 'better-sqlite3';
import { quotesData, authors  } from '../data';

const db = new Database('foobar.db', { verbose: console.log });

const createQuotesTable = db.prepare(`
  CREATE TABLE IF NOT EXISTS quotes (
    id INTEGER NOT NULL,
    quote TEXT NOT NULL,
    authorID INTEGER NOT NULL,
    PRIMARY KEY (id)
  );`)

  const createAuthorsTable = db.prepare(`
  CREATE TABLE IF NOT EXISTS authors (
    id INTEGER NOT NULL,
    author TEXT NOT NULL,
    age INTEGER NOT NULL,
    img TEXT NOT NULL,
    PRIMARY KEY (id)
  );`)

  createAuthorsTable.run()

  createQuotesTable.run()

  const createQuote = db.prepare(
    'INSERT INTO quotes (quote, authorId) VALUES (?,?); '
  )

  const createAuthor = db.prepare(
    'INSERT INTO authors (author, age , img) VALUES (?,?,?); '
  )

  for (const iterator of quotesData) {
    createQuote.run(iterator.quote, iterator.authorId)
  }
  for (const iterator of authors) {
    createAuthor.run(iterator.author, iterator.age, iterator.img)
  }