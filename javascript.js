window.onload = function () {
    console.log( SC);
    SC.initialize({
        client_id: '7fcf1c871e016ce004ecc1dcbb520d08',
        redirect_uri: 'https://pantazis.github.io/My-Angularjs-App/callback'
    });
  /*var asutis = SC.get('/resolve', {
  url: 'https://soundcloud.com/hbrideacast'
});
    console.log(asutis);
  
    http://api.soundcloud.com/tracks/13158665?client_id=7fcf1c871e016ce004ecc1dcbb520d08
    */

 SC.get('/user/37590655/tracks').then(function(tracks){
  alert('Latest track: ' + tracks[0].title);
});
};

