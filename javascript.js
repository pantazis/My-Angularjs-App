

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

 console.log(SC.get('/tracks/13158655'));

SC.put('/me', {
  user: { description: 'I am using the SoundCloud API!' }
}).then(function(){
  return SC.get('/me');
}).then(function(me){
  console.log(me.description);
}).catch(function(error){
  alert('Error: ' + error.message);
});


