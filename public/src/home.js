function sort(array){
  return array.sort((one, two) => one.count < two.count ? 1 : -1).splice(0, 5);
}
//===== helper function above =======

function getTotalBooksCount(books) {
  let total = books.length
  return total;
}

function getTotalAccountsCount(accounts) {
  let total = accounts.length
  return total;
}

function getBooksBorrowedCount(books) {
  let BookBorrowedcount = books.filter((book) => !book.borrows[0].returned);
  return BookBorrowedcount.length;
}

function getMostCommonGenres(books) {
  let result = [];
const genList = books.map((book) => book.genre);
const accList = genList.reduce((acc, genre) => {
  acc[genre] === undefined ? (acc[genre] = 1) : (acc[genre] += 1);
  return acc;
}, {})

for(gen in accList) {
  const number = accList[gen];
  const common = {"name": gen, "count": number };
  result.push(common);
  
};
return sort(result);
}

function getMostPopularBooks(books) {
  let result = [];
  
  books.forEach(book => {
    const theNumber = book.borrows.length;
    const title = book.title;
    const popular = {"name": title, "count": theNumber};
    result.push(popular);
   });
return sort(result);
}


function getMostPopularAuthors(books, authors) {
  let result = [];
  
  books.forEach(book => {
    const number = book.borrows.length;
    authors.forEach(author => {
      const first = author.name.first;
      const last = author.name.last;
      const full = `${first} ${last}`;
      
        if(author.id === book.authorId){
          const final = {"name": full, "count": number}
          result.push(final);
        }
      });
  });
  return sort(result);
}



module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
