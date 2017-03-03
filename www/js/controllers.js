angular.module('app.controllers', [])
  


.controller('CargaCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

	
}])

.controller('polloCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

	//$scope.listaPollo={};

	$scope.listaPollo=[{"descripcion":"Pata Muslo"},{"descripcion":"Pechuga"}];

}])
   
.controller('choriCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
      
.controller('loginCtrl',function($scope, $stateParams,$http) {


	$scope.validar=function()
   {
              var user=$("#user").val();
              var pass=$("#pass").val();
              var tipo=$("input:radio[name=tipo]:checked").val();
              console.log(tipo);
             
            console.log(user+","+pass);
              var config = {
              url: 'http://localhost/marilu_damiano/ws/login/',
              method: 'post',
              data:{user:user,pass:pass,tipo:tipo},
              headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                };
            $http(config)
            .then(function(data){

              // alert("Datos insertados correctamente");
            
               console.log(data.data.length);
             
            });
    } 

})
   
.controller('homeCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('cerdoCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('vacaCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('embuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 