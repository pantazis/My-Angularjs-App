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

myApp.controller("youtubeapi", function ($q, $timeout) {
    var youtube = this;

    function add(x, y, callB) {
        $timeout(function () {
            callB(x + y);
        }, 5000);

    };
    var starttime = Date.now();

    youtube.result = add(3, 4, function (result) {
        callB(x + y);
        youtube.result = result;
        youtube.elapsedTime = Date.now() - starttime


    });





    /*-----------------------------------------------------------------------------------------------------
googleApiClientReady();


var youtube = this;
youtube.show = false;
youtube.text = "Search Videos";
youtube.Sresults = [];
youtube.search = function () {



    var q = document.getElementById('query').value;




    var request = gapi.client.youtube.search.list({
        q: q,
        part: 'snippet'
    });
    

    request.execute(function (response) {
        var str = response.result;

        youtube.Sresults = str.items;
        youtube.show = true;
        
    });
}
-----------------------------------------------------------------------------------------------------*/
});
