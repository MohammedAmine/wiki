var app = angular.module("wikiApp");
app.controller("NavBarController",function ($scope,authService){
    $scope.nav='nav Bar ';
    
    $scope.auth={
        login:'',
        pwd:''
    }
    
    $scope.isAuth = authService.isAuth();
    $scope.authentify = function(){
        $scope.isAuth = true;
        return authService.login($scope.auth);
    }
    $scope.logout = function(){
        authService.logout();
    }
});


