/**
 * Created by ADRIAN on 25/4/2018.
 */
angular.module('adminModule')
/*
 Los factory en angular estan basados en el patron de diseño factoria el cual
 deviuelve instancias de un objeto o variable en este caso es un arreglo de
 objetos json

 Estos objetos encapsulan las funciones para obtener crear editar y borrar datos de un recurso especifico
 algunos de estas funciones devuelben callbacks los cuales son ejecutados cuando sean necesarios del lado
 del controlador

 */
    .factory('RecursoEstudiante', function ($http) {
        var authToken = localStorage.getItem('session.token');
        var factory = {
            getEstudianteInfo: function (carID, callback) {
                $http({
                        method: "GET",
                        url: API_ROOT+'/fleet/getVehicle?vehicleId={0}&authToken={1}'.format(carID)
                    }
                ).success(function successCallback(response) {
                    // this callback will be called asynchronously
                    // when the response is available
                    console.log("entro", response);
                    callback(response.content);
                }).error(function errorCallback(response) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    console.log("fallo", response);
                    callback(response.content);
                });
            },
            getEstudiantes: function ( callback) {
                $http.get(
                    API_ROOT +'/fleet/getFleet?filter=enabled&headquarter=SanCarlos&authToken={0}'.format()
                ).success(function successCallback(response) {
                    // Esta funcion es la que se ejecuta
                    // cuando la pet    icion es exitosa
                    //response es la variable en la que se devuelven los datos
                    //En este caso particular nuestro response esta estructurado de manera que
                    //los datos que interesan estan en el atributo content
                    //Se devuelve un callback el cual se ejecuta en el controller
                    callback(response.content);
                }).error(function errorCallback(response) {
                    //En caso de fallo en la peticion entra en esta funcion
                    console.log("fallo", response);
                    callback(response.content);
                });
            },
            setNuevoEstudiante: function (fleet,callback) {
                $http({
                    method: 'POST',
                    url: API_ROOT + '/fleet/addVehicle?authToken={0}'.format(),
                    data: fleet
                })
                    .success(function (data) {
                        callback(data);

                    }).error(function(data){
                    console.log("error setNewCar",data);
                    callback(data);
                });
            },
            deleteEstudiante: function (carID) {
                $http({
                    method: 'POST',
                    url: API_ROOT + '/fleet/deleteVehicle?vehicleId={0}&authToken={1}'.format(carID)
                })
                    .success(function (data) {
                        if (data.errors) {
                            // Showing errors.
                            console.log("set message error", data);
                        } else {
                            console.log("delete car success",data);
                        }
                    });
            },
            editEstudiante: function (carID,fleet) {
                $http({
                    method: 'POST',
                    url: API_ROOT + '/fleet/vnext/editVehicle?vehicleId={0}&authToken={1}'.format(carID),
                    data: fleet
                })
                    .success(function (data) {
                        if (data.errors) {
                            // Showing errors.
                            console.log("set message error", data.errors);
                        } else {
                            console.log("set edit success",data);
                        }
                    });
            }
        };
        return factory;
    })
    .factory('RecursoProfesor', function ($http) {
        var authToken = localStorage.getItem('session.token');
        var factory = {
            getProfesorInfo: function (carID, callback) {
                $http({
                        method: "GET",
                        url: API_ROOT+'/fleet/getVehicle?vehicleId={0}&authToken={1}'.format(carID)
                    }
                ).success(function successCallback(response) {
                    // this callback will be called asynchronously
                    // when the response is available
                    console.log("entro", response);
                    callback(response.content);
                }).error(function errorCallback(response) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    console.log("fallo", response);
                    callback(response.content);
                });
            },
            getProfesores: function ( callback) {
                $http.get(
                    API_ROOT +'/fleet/getFleet?filter=enabled&headquarter=SanCarlos&authToken={0}'.format()
                ).success(function successCallback(response) {
                    // Esta funcion es la que se ejecuta
                    // cuando la pet    icion es exitosa
                    //response es la variable en la que se devuelven los datos
                    //En este caso particular nuestro response esta estructurado de manera que
                    //los datos que interesan estan en el atributo content
                    //Se devuelve un callback el cual se ejecuta en el controller
                    callback(response.content);
                }).error(function errorCallback(response) {
                    //En caso de fallo en la peticion entra en esta funcion
                    console.log("fallo", response);
                    callback(response.content);
                });
            },
            setNuevoProfesor: function (fleet,callback) {
                $http({
                    method: 'POST',
                    url: API_ROOT + '/fleet/addVehicle?authToken={0}'.format(),
                    data: fleet
                })
                    .success(function (data) {
                        callback(data);

                    }).error(function(data){
                    console.log("error setNewCar",data);
                    callback(data);
                });
            },
            deleteProfesor: function (carID) {
                $http({
                    method: 'POST',
                    url: API_ROOT + '/fleet/deleteVehicle?vehicleId={0}&authToken={1}'.format(carID)
                })
                    .success(function (data) {
                        if (data.errors) {
                            // Showing errors.
                            console.log("set message error", data);
                        } else {
                            console.log("delete car success",data);
                        }
                    });
            },
            editProfesor: function (carID,fleet) {
                $http({
                    method: 'POST',
                    url: API_ROOT + '/fleet/vnext/editVehicle?vehicleId={0}&authToken={1}'.format(carID),
                    data: fleet
                })
                    .success(function (data) {
                        if (data.errors) {
                            // Showing errors.
                            console.log("set message error", data.errors);
                        } else {
                            console.log("set edit success",data);
                        }
                    });
            }
        };
        return factory;
    });

