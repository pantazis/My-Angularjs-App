// u8_y5FFWh_M2AvvN3VooEiO8
// client ID 340921863699-csp6142a8v1fcti86c5g6amv7ge21q43.apps.googleusercontent.com
// The client ID is obtained from the {{ Google Cloud Console }}
// at {{ https://cloud.google.com/console }}.
// If you run this code from a server other than http://localhost,
// you need to register your own client ID.
var apiKey = "AIzaSyDDczfcz2PVNMNBwwonpRI7t3WthynNrOk";
var OAUTH2_CLIENT_ID = "340921863699-csp6142a8v1fcti86c5g6amv7ge21q43.apps.googleusercontent.com";
var OAUTH2_SCOPES = [
  'https://www.googleapis.com/auth/youtube',
];

function handleAPILoaded() {
    console.log("sasasasasas");
    $('#search-button').attr('disabled', false);
}


function loadAPIClientInterfaces() {
    function waitForElement() {
      if (typeof gapi.client != "undefined") {
          console.log(gapi.client);
            gapi.client.setApiKey(apiKey);
            gapi.client.load('youtube', 'v3', function () {
                    handleAPILoaded();
                });
          
      }
        else {
          setTimeout(function () {
              waitForElement();
          }, 250);
      };
  };
  waitForElement();
    
   




            


         
    };









    // Upon loading, the Google APIs JS client automatically invokes this callback.
    var googleApiClientReady = function () {
      
        loadAPIClientInterfaces();

    }

  /*  function search() {
        console.log("asasasasasaaaaaaghjhkjhkjhfg")
        var q = document.getElementById('query').value;
        var request = gapi.client.youtube.search.list({
            q: q,
            part: 'snippet'
        });

        request.execute(function (response) {
            var str = response.result;
            console.log(str);
        });
    }*/





    /*-----------------------------------------------------------------------------*/
