

    SC.initialize({
        client_id: '7fcf1c871e016ce004ecc1dcbb520d08',
        redirect_uri: 'https://pantazis.github.io/My-Angularjs-App/callback'
    });




  SC.get("tracks", { genre:"Hip-hop & Rap"
      
      
  }).then(function (tracks) {
      SC.oEmbed(tracks[0].uri, {
          auto_play: true
      }).then(function(embed){
 document.getElementById("track").innerHTML= embed.html;
          
}
      );
  });








