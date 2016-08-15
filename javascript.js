window.onload = function () {
    console.log( SC);
    SC.initialize({
        client_id: '7fcf1c871e016ce004ecc1dcbb520d08',
        redirect_uri: 'https://pantazis.github.io/My-Angularjs-App/callback'
    });
SC.get('/resolve', {
  url: 'https://soundcloud.com/hbrideacast'
}, function(user) {
    console.log("asasasasa");
  console.log(user.id);
});
 /* SC.get('/user/183/tracks').then(function(tracks){
  alert('Latest track: ' + tracks[0].title);
});*/
};

