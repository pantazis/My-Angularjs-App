var myApp = angular.module("myApp", ['ngAnimate', 'ui.router']);

myApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: "/",
            templateUrl: 'add-person.html'
        })
        .state('Contact', {
            url: "/contact",
            templateUrl: 'form.html'
        })
        .state('about', {
            url: "/about",
            templateUrl: 'form.html'
        });
});





myApp.controller("DirectiveController", function () {
    var dirList = this;
    dirList.hide = true;
    dirList.sh = "show";
    dirList.asss = function () {
        dirList.hide = !dirList.hide
        dirList.hide === true ? dirList.sh = "show" : dirList.sh = "Hide";
        return dirList.hide;
    };
    dirList.item = [{
            name: 'pantazis',
            age: 10
            }
                                    , {
            name: 'pantfgazirs',
            age: 10
            }
                                    , {
            name: 'irina',
            age: 5
            }
                                    , {
            name: 'marinos',
            age: 7
            }];
    dirList.addPerson = function () {
        dirList.item.push({
            name: dirList.fname,
            age: dirList.fage
        });
    };
});
myApp.directive("myDirective",function(){
    return {
        template: 'hello world'
    };
});
