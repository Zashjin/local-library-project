function findAccountById(accounts, id) {
  let result = accounts.find((account) => id === account.id);
  return result;
 }

function sortAccountsByLastName(accounts) {
  let results = accounts.sort((accountA, accountB ) => accountA.name.last > accountB.name.last ? 1:-1);
 return results;
}

function getTotalNumberOfBorrows(account, books) {
  let accountHolder = account.id;
  let bookBorrows = [];
  for (let i = 0; i < books.length; i++){
    const book = books[i].borrows;
  for (let j = 0; j < book.length; j++){
    let borrowedId = book[j].id;
    bookBorrows.push(borrowedId);

  }
 }
 let matchingId = bookBorrows.filter((matches) => matches === accountHolder);
 return matchingId.length;
}
function getBooksPossessedByAccount(account, books, authors) {
  const bookOne = books.filter((book) => {
  const borrow = book.borrows[0];
  return !borrow.returned && borrow.id === account.id;
  });

  const allCurrentBorrows = bookOne.map((book) => {
  const auth = authors.find((author) => author.id === book.authorId)
  console.log(auth)
  return {...book, author:auth}
  });
return allCurrentBorrows
 
}
module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
