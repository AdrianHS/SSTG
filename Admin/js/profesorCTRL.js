angular.module('adminModule')
    .controller('profesorCtrl', function($scope,RecursoProfesor) {

        $scope.getTodosProfesores=RecursoProfesor.getProfesores(function (res) {
            console.log("res ", res);
            $scope.mostrarProfesores=res
        });

    });