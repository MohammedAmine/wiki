var app = angular.module("wikiApp")
        .factory('authService',function($state,$websocket){
            
            var _isAuth = false;
    
        var service={
            isAuth: isAuth,
            login: login,
            logout:logout
        }
     function login(data){
            // Open a WebSocket connection
          var ws = $websocket.$new('ws://10.42.2.184:9090');
          ws.$on('$open', function () {
            console.log('Oh my gosh, websocket is really open!');
            
            ws.$emit('wiki login', JSON.stringify({username:'saad'}));
        });

        ws.$on('wiki login', function (data) {
            console.log('The websocket server has sent the following data:' + data);
       
            ws.$close();
        });

        ws.$on('$close', function () {
            console.log('Noooooooooou, I want to have more fun with ngWebsocket, damn it!');
        });
        
       
          
         
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
