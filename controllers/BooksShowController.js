angular.module('libraryApp')
  .controller('BooksShowController', BooksShowController);

BooksShowController.$inject=['$http', '$routeParams', '$location'];
function BooksShowController($http, $routeParams, $location) {
  var vm = this;
  var bookId = $routeParams.id; //
  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/books/' + bookId //($routeParams.id)
  })
    .then(onBooksShowSuccess, onError);

    function onBooksSuccess(response){

      vm.book = response.data;
    }
    function onError(error){
      console.error("there was an error: ", error);
    }
}
//Update a single book
//Delete a single book
//
