SC.initialize({
    client_id: '7fcf1c871e016ce004ecc1dcbb520d08',
    redirect_uri: 'https://pantazis.github.io/My-Angularjs-App/callback'
});

//https://api-v2.soundcloud.com/charts?kind=top&genre=soundcloud:genres:all-music&client_id=02gUJC0hH2ct1EGOcYXQIzRFU91c72Ea&limit=20&offset=0&linked_partitioning=1&app_version=1471261044
//https://api-v2.soundcloud.com/charts?kind=top&genre=soundcloud:genres:classical&client_id=02gUJC0hH2ct1EGOcYXQIzRFU91c72Ea&limit=20&offset=0&linked_partitioning=1&app_version=1471511869


/*SC.get("tracks", {
   // kind: "top",
    //genre: "soundcloud:genres:ambient"
}).then(function (tracks) {
    SC.oEmbed(tracks[0].uri, {
        auto_play: true
    }).then(function (embed) {
        document.getElementById("track").innerHTML = embed.html;
    });
});*/

/*https://api-v2.soundcloud.com/charts?kind=top&genre=soundcloud:genres:ambient&client_id=7fcf1c871e016ce004ecc1dcbb520d08&limit=20&offset=0&linked_partitioning=1&app_version=1471511869
SC.get("charts", {
            kind: "top",
            genre: "soundcloud:genres:ambient",
            client_id: "02gUJC0hH2ct1EGOcYXQIzRFU91c72Ea",
           


        })
*/

jQuery.ajax("https://api-v2.soundcloud.com/charts?kind=top&genre=soundcloud:genres:ambient&client_id=7fcf1c871e016ce004ecc1dcbb520d08");
