var app = angular.module("wikiApp", ['ui.router','ngWebsocket']);
var articles = {};
app.config(function ($stateProvider, $urlRouterProvider) {

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
            console.log('controller home');
            if(Object.keys(articles).length == 0 ){
                articles = dataService.getArticles();
            }
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
