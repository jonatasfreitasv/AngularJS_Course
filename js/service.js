(function(){

    var app = angular.module('service', []);

    app.controller('ServiceController', ['$http', function($http){
      

       var service = this;

       service.infos = {};


       $http.get('http://cep.correiocontrol.com.br/91450030.json').success(function(data){
            service.infos = data;
            console.log(data);
       });


    }]);


})();