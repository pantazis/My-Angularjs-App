/*
AIzaSyDadPNzC_v8PZ9Fa8WRNNSa2Wx34LDu5l0
*/
function googleApiClientReady() {

    var apiKey = 'AIzaSyDadPNzC_v8PZ9Fa8WRNNSa2Wx34LDu5l0';

    gapi.client.setApiKey(apiKey);
    gapi.client.load('youtube', 'v3', function() {

        request = gapi.client.youtube.search.list({
            part: 'snippet',
            channelId: 'UCqhNRDQE_fqBDBwsvmT8cTg',
            order: 'date',
            type: 'video'

        });

        request.execute(function(response) {
                console.log(response);

        });
    });

}
