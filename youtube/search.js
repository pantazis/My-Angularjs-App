/*
AIzaSyDadPNzC_v8PZ9Fa8WRNNSa2Wx34LDu5l0
*/
function appendResults(text) {
    var results = document.getElementById('results');
    results.appendChild(document.createElement('P'));
    results.appendChild(document.createTextNode(text));
}

function makeRequest() {
    var request = gapi.client.urlshortener.url.get({
        'shortUrl': 'http://goo.gl/fbsS'
    });
    request.then(function (response) {
        appendResults(response.result.longUrl);
    }, function (reason) {
        console.log('Error: ' + reason.result.error.message);
    });
}

gapi.load('client', init);

function init() {
    gapi.client.setApiKey('AIzaSyDadPNzC_v8PZ9Fa8WRNNSa2Wx34LDu5l0');
    gapi.client.load('urlshortener', 'v1').then(makeRequest);

}
