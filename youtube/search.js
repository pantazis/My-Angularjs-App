/*
AIzaSyDadPNzC_v8PZ9Fa8WRNNSa2Wx34LDu5l0
*/
function appendResults(text) {
    var results = document.getElementById('results');
    results.appendChild(document.createElement('P'));
    results.appendChild(document.createTextNode(text));
}

function makeRequest() {
    var request = gapi.client.YouTube.Search.list('id,snippet', {q: 'dogs', maxResults: 25});

        
   
    request.then(function (response) {
        appendResults(response.result.longUrl);
    }, function (reason) {
        console.log('Error: ' + reason.result.error.message);
    });
}

gapi.load('client', init);

function init() {
    gapi.client.setApiKey('AIzaSyDadPNzC_v8PZ9Fa8WRNNSa2Wx34LDu5l0');
    gapi.client.load('YouTube', 'v3').then(makeRequest);

}
