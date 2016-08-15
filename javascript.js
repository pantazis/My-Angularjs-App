 SC.initialize({
    client_id: '7fcf1c871e016ce004ecc1dcbb520d08',
    redirect_uri: 'https://pantazis.github.io/My-Angularjs-App/callback.html'
  });
    
    SC.get('/user/whose-misery-is-it').then(function(tracks){
        
  console.log( tracks);
});
    console.dir(SC);
