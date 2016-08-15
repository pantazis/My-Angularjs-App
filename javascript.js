 SC.initialize({
    client_id: '7fcf1c871e016ce004ecc1dcbb520d08',
    redirect_uri: 'https://pantazis.github.io/My-Angularjs-App/callback.html'
  });
    
    $("#loadTracks").on("click", function(){
        console.log("hello");
        /*
    SC.get("/tracks", {limit: 1}, function(tracks){
       
      var track = tracks[0];
      SC.oEmbed(track.uri, document.getElementById("track"));
    });*/
  });

window.onload = function(){SC.initialize();};



