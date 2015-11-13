var app = angular.module("wikiApp")
        .factory('authService',function($state,wsService){
                 
        var _isAuth = false;
    
        var service={
            isAuth: isAuth,
            login: login,
            logout:logout
        };
     function login(data){
            // Open a WebSocket connection
           
          wsService.ws.$emit('wiki login',data);
     
     } 
      function logout(){
          _isAuth = false;
          $state.reload();
     }
     function isAuth(){
         return _isAuth;
     }
     
     return service;
     
});
