function findAuthorById(authors, id) {
  let info = authors.find((author) => author.id === id)
  return info;
}

function findBookById(books, id) {
  let bookOfInterest = books.find((book) => book.id ===id);
  return bookOfInterest;
}

function partitionBooksByBorrowedStatus(books) {
  let isBookBorrowed = books.filter((book) => !book.borrows[0].returned);
  let bookNotBorrowed = books.filter((book) => book.borrows[0].returned);
  let partitionBooks = [isBookBorrowed, bookNotBorrowed];
  return partitionBooks;
}

function getBorrowersForBook(book, accounts) {
  let borrowers = [];
  accounts.map((account)  => {
    book.borrows.find((borrow) => 
    {
      if (borrow.id === account.id)
      {
        account["returned"]= borrow.returned
        borrowers.push(account)
      }
    })
  })
  return borrowers.splice(0,10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
