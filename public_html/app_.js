
var app = angular.module("wikiApp",['ui.router']);

app.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/');
    $stateProvider.state('home', {
        url : "/",
        views: {
            "headerView" : {
                templateUrl: 'views/header/header.html',
                controller : 'headerController'
            },
            "footerView" : {
                templateUrl: 'views/footer/footer.html',
                controller : 'footerController'
            },
            "wikiDetailView" : {
                templateUrl: 'views/content/detail/detail.html',
                controller : 'detailController'
            },
            "wikiListView" : {
                templateUrl: 'views/content/list/list.html',
                controller : 'listController'
            }
        }
    }).state('new', {
        url : "/new",
        views: {
            "wikiDetailView@" : {
                templateUrl: 'views/new/new.html',
                controller : 'newController'
            }
        }
    });
});