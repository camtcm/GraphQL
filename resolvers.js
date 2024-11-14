const books = [
  { id: '1', title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Fiction', published: 1925 },
  { id: '2', title: '1984', author: 'George Orwell', genre: 'Science Fiction', published: 1949 },
  { id: '3', title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Fiction', published: 1960 },
  { id: '4', title: 'Moby-Dick', author: 'Herman Melville', genre: 'Adventure', published: 1851 }
];

const resolvers = {
  books: () => books,
  book: ({ id }) => books.find(book => book.id === id),

  booksByGenre: ({ genre }) => books.filter(book => book.genre === genre),  
  booksByAuthor: ({ author }) => 
    books.filter(book => book.author.toLowerCase().includes(author.toLowerCase())),
};

module.exports = resolvers;


