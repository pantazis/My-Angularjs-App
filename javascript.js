 SC.initialize({
     client_id: '7fcf1c871e016ce004ecc1dcbb520d08',
     redirect_uri: 'https://pantazis.github.io/My-Angularjs-App/callback.html'
 });

          

  SC.connect().then(function() {
  console.log(SC.get('/me'));
});


window.onunload =function(){
      SC.connect().then(function() {
  console.log(SC.get('/me'));
});
};


