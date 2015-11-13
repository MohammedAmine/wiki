var app = angular.module("wikiApp")
       .factory('wsService', function ($websocket,$rootScope) {

           var ws =  $websocket.$new('ws://10.42.2.184:9090');
            ws.$on('$open', function () {
              console.log('Connection Open !!');
                ws.$emit('wiki posts',{test :'t'});
            });
           return {'wiki': {
                   'post': function (data) {

                   },
                   'posts': function (data) {
                  
                       $rootScope.$broadcast('fill',data);
                   },
                   'login': function () {
                        console.log('loged in succesfuly');
                   }
               },
               ws: ws};
       });
