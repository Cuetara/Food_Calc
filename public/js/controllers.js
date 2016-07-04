var mainPage = function($scope,$http) {
  $http.get("/api/ingredientes")                            /*get: coger datos de un url*/
  .success(function(ingredientes){
    $scope.ingredientes=ingredientes;
  })

  $scope.crearIngrediente=function(ingrediente) {
    $http.post("/api/ingrediente",ingrediente)                   /*post: enviar datos a un url*/
    .success(function(data){
      $scope.ingredientes.unshift(data)
    })
  }
}

var mainCtrl = function() {
}

angular.module("foodCalc")
.controller("mainPage", mainPage)
.controller("mainCtrl", mainCtrl)
