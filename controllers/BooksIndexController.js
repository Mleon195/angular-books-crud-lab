angular
  .module('libraryApp')
  .controller('BooksIndexController', BooksIndexController);

BooksIndexController.$inject=['$http'];
function BooksIndexController($http){
  var vm = this;

//Getting All the Books
$http({
  method: 'GET',
  url: 'https://super-crud.herokuapp.com/books'
}).then(onBooksIndexSuccess, onError);

function onBooksIndexSuccess(response){
  console.log('books data: ', response.data);
  vm.books = response.data.books;
}
function onError(error){
  console.error(error);
}
}
