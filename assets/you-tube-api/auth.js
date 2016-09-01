// u8_y5FFWh_M2AvvN3VooEiO8
// client ID 340921863699-csp6142a8v1fcti86c5g6amv7ge21q43.apps.googleusercontent.com
// The client ID is obtained from the {{ Google Cloud Console }}
// at {{ https://cloud.google.com/console }}.
// If you run this code from a server other than http://localhost,
// you need to register your own client ID.
var apiKey= "AIzaSyDDczfcz2PVNMNBwwonpRI7t3WthynNrOk";
var OAUTH2_CLIENT_ID = "340921863699-csp6142a8v1fcti86c5g6amv7ge21q43.apps.googleusercontent.com";
var OAUTH2_SCOPES = [
  'https://www.googleapis.com/auth/youtube',
];

// Upon loading, the Google APIs JS client automatically invokes this callback.
var googleApiClientReady = function() {
  
    loadAPIClientInterfaces();
   // gapi.auth.init(function() {
   // window.setTimeout(checkAuth, 1);
 // });
}


function loadAPIClientInterfaces() {
gapi.client.setApiKey(apiKey);
  gapi.client.load('youtube', 'v3', function() {
          handleAPILoaded();
  });
}
/*-----------------------------------------------------------------------------*/
function handleAPILoaded() {
  $('#search-button').attr('disabled', false);
}

