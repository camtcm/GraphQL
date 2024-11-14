const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Book {
    id: ID!
    title: String!
    author: String!
    genre: String
    published: Int
  }

  type Query {
    books: [Book]!
    book(id: ID!): Book
    booksByGenre(genre: String!): [Book]!
    booksByAuthor(author: String!): [Book]!
  }
`);

module.exports = schema;