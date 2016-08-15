 SC.initialize({
    client_id: '7fcf1c871e016ce004ecc1dcbb520d08',
    redirect_uri: 'https://pantazis.github.io/My-Angularjs-App/callback.html'
  });
    
    SC.get('/msmrsounds/tracks').then(function(tracks){
        
  console.log('Latest track: ' + tracks[0].title);
});
    console.log(SC);
