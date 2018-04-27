angular.module('adminModule')
.config(['$routeProvider',function($routeProvider)
    {
        $routeProvider.when("/",{
                templateUrl:'login.html'
            })
        //Se conecta la vista de reservas administrador con el controlador
            .when("/Admin/pages/Estudiante/mostrarEstudiante.html",{
                templateUrl:'Estudiante/mostrarEstudiante.html',
                controller: 'estudianteCTRL'
            })
            //Se conecta la vista de reservas administrador con el controlador
            .when("/Admin/pages/Estudiante/crearEstudiante.html",{
                templateUrl:'Estudiante/crearEstudiante.html',
                controller: 'estudianteCTRL'
            })
            //Se conecta la vista de reservas administrador con el controlador
            .when("/Admin/pages/Profesor/crearProfesor.html",{
                templateUrl:'Profesor/crearProfesor.html',
                controller: 'profesorCTRL'
            })
            //Se conecta la vista de reservas administrador con el controlador
            .when("/Admin/pages/Profesor/mostrarProfesor.html",{
                templateUrl:'Profesor/mostrarProfesor.html',
                controller: 'profesorCTRL'
            })
            //Se conecta la vista de los mensajes con el controlador
            .when("/Admin/pages/Dashboard/dashboard.html",{
                templateUrl:'dashboard.html',
                controller: 'dashboard'
            })














            //Se conecta la vista de información de los choferes
            .when("/admin/driverAdmin/driverAdminInfo/:valueID",{
                templateUrl:'DriverAdmin/driverAdminInfo.html',
                controller: 'driverInfoCtrl'
            })

            .otherwise({ redirectTo: '/Admin' });
    }
]);
