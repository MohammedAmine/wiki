var app = angular.module("wikiApp", ['ui.router','ngWebsocket','pascalprecht.translate']);

app.run (function (wsService,$rootScope) {
    $rootScope.articles = {};
   // nouvelle liste des articles
   wsService.ws.$on('$message', function (resp) {
       if(resp.event){
           console.log(resp.event);
           var details = resp.event.split(' ');
            wsService[details[0]][details[1]](resp.data);
       }
       
   });
    $rootScope.$on('fill',function(event,data){
        console.log(data);
        $rootScope.articles = data;
        $rootScope.$apply();
     });
})
.config(function ($stateProvider, $urlRouterProvider, $translateProvider) {



$translateProvider.translations('en', {
    HEADLINE: 'Hello there, This is my awesome app!',
    INTRO_TEXT: 'And it has i18n support!'
  });
  
  $translateProvider.translations('fr', {
    HEADLINE: 'Hello there, This is my awesome app!',
    INTRO_TEXT: 'And it has i18n support!'
  });

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home', {
        url: '/',
        resolve: {
                         getUrl : function(){
                             
                            var view = 'navbar';
                            return 'views/navbar/'+ view +'.html';
                        }                  
                },
        views: {
            "navBar@": {
                templateProvider: function ($http,authService) {
                      var view = 'navbar';
    
                      if(authService.isAuth()) view = 'login';                    
                      var url = 'views/navbar/'+ view +'.html';
                      return $http.get(url).then(function(response) {
                            return response.data;
                         })
               }
                ,
                controller: 'NavBarController'
            },
            "footer@": {
                templateUrl: 'views/footer/footer.html',
                controller: 'FooterController'
            },
            "formulaire@": {
                templateUrl: 'views/content/formulaire/formulaire.html',
                controller: 'FormulaireController'
            },
            "list@": {
                templateUrl: 'views/content/list/list.html',
                controller: 'ListController'
            }
        },
        onEnter: function(dataService){
           
        },
       
        onExit : function(){
           
        }
    }).state('new', {
        parent:'home',
        url: 'new',
        views: {
            "formulaire@": {
                templateUrl: 'views/new/new.html',
                controller:'NewController'
            }
        }
    }).state('exit', {
        url: '/exit',
        views: {
            "content": {
                template: '<h1>Salina</h1>'
            }
        }
    });
});
