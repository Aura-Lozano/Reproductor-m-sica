angular.module("Reproductor", [])
.controller("ControladorReproductor", function ($scope, $http){

    $scope.artistas=[];

    //cargue de datos (solo posible mediante servicio)
    $http.get("datos/Musiteca.json")
    .then(function(datos){
        $scope.artistas = datos.data.Artistas;
    });


});

