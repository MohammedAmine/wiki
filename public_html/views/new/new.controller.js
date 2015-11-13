var app = angular.module("wikiApp");
app.controller("NewController",function ($scope,dataService,authService){
    
    $scope.article = {
     
        title : '',
        category : '',
        body : ''
        
    }
    
     $scope.isAuth = authService.isAuth;
 
    $scope.create = function(){

        dataService.createArticle($scope.article);
        
    }
    
});
