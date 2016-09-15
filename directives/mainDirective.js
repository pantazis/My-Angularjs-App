var myApp = angular.module("myApp", ['ngAnimate', 'ui.router']);

myApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: "/",
            templateUrl: 'views/add-person.html'
        })
        .state('Contact', {
            url: "/contact",
            templateUrl: 'views/form.html'
        })
        .state('about', {
            url: "/about",
            templateUrl: 'views/youtube.html'
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

myApp.controller("youtubeapi", function ($q) {


    var youtube = this;
    youtube.Sresults = [];

    youtube.search = function () {
            console.log("hello")




            var q = document.getElementById('query').value;




            var request = gapi.client.youtube.search.list({
                q: q,
                part: 'snippet'
            });


            request.execute(function (response) {

                
                var str = response.result;
                var promise = asyncGreet(response);
                promise.then(function (greeting) {
                    console.log(str.items[0].snippet);
                    
                    
                    
                        youtube.Sresults = str.items;
                        youtube.show = true;
                       
                    
                    
                    
                    
                    
                    
                    
                    

                    },
                    function (reason) {
                        alert('Failed: ' + reason);
                    },
                    function (update) {
                        alert('Got notification: ' + update);
                    });




            })
        }
        /*-----------------------------------------------------------------------------------------------------------------*/
    function asyncGreet(response) {
        var deferred = $q.defer();


        if (typeof response == "object") {
            deferred.resolve('Hello, ' + name + '!');
        } else {
            deferred.reject('Greeting ' + name + ' is not allowed.');
        }


        return deferred.promise;
    }



    /*-----------------------------------------------------------------------------------------------------------------*/

});
