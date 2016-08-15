 SC.initialize({
     client_id: '7fcf1c871e016ce004ecc1dcbb520d08',
     redirect_uri: 'https://pantazis.github.io/My-Angularjs-App/callback.html'
 });

 $("#loadTracks").on("click", function () {
   
         

  SC.connect().then(function() {
  return SC.get('/me');
}).then(function(me) {
  alert('Hello, ' + me.username);
});

 window.onload = function () {
     SC.initialize();
 };
