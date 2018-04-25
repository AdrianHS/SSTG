angular.module('adminModule')
    .controller('estudianteCtrl', function($scope,RecursoEstudiante) {

        $scope.getTodosEstudiantes=RecursoEstudiante.getEstudiantes(function (res) {
            console.log("res ", res);
            $scope.mostrarEstudiante=res
        });

    });