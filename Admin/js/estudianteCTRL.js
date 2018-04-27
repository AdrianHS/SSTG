angular.module('adminModule')
    .controller('estudianteCtrl', function($scope,RecursoEstudiante) {

        $scope.getTodosEstudiantes=RecursoEstudiante.getEstudiantes(function (res) {
            console.log("res ", res);
            $scope.mostrarEstudiante=res
        });
        $scope.guardarEstudiante=function() {
                $scope.newDriver.identification = $scope.getTodosEstudiantes.toString();
                RecursoEstudiante.setNuevoEstudiante($scope.getTodosEstudiantes);
        }
    });