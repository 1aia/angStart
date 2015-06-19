var userApp = angular.module("userApp", [/*'ui.bootstrap',*/ 'ngRoute', 'ngResource']);

function getTemplateUrl(viewName){
    return '/scripts/app/views/' + viewName + '.html';
}

userApp.config(function ($routeProvider) {
    $routeProvider
      .when('/users/new', {
        controller: 'NewUserCtrl',
        templateUrl: getTemplateUrl('newuser')
    }).when('/users/:userId', {
        controller: 'UsersByIdCtrl',
        templateUrl: getTemplateUrl('userbyid')
    }).when('/users', {
        controller: 'UsersCtrl',
        templateUrl: getTemplateUrl('users')
    }).otherwise({
        controller: 'SpaCtrl',
        templateUrl: getTemplateUrl('spahome')
    });
});