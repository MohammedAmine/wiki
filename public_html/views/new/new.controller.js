var app = angular.module("wikiApp");
app.controller("NewController",function ($scope,dataService,authService){
    
    $scope.article = {
   
        title : '',
        category : '',
        contenu : '',
        
    }
    
     $scope.isAuth = authService.isAuth;
 
    $scope.create = function(){
        
        $scope.article.id = Math.random();
        dataService.createArticle($scope.article);
        
    }
    
});
