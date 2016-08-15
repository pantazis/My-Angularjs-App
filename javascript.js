 SC.initialize({
    client_id: '7fcf1c871e016ce004ecc1dcbb520d08',
    redirect_uri: 'https://pantazis.github.io/My-Angularjs-App/callback.html'
  });
    
    $("#loadTracks").on("click", function(){
        console.log("hello");
    var adde = SC.get("/tracks", {limit: 1});
         console.log(adde);
       
    SC.get("/tracks", {limit: 10}, function(tracks){
       
      var track = tracks[2];
        console.log(track);
      SC.oEmbed(track.uri, document.getElementById("track"));
    });*/
  });

window.onload = function(){SC.initialize();SC.get();};



