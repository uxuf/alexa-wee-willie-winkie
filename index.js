var Alexa = require('alexa-sdk');

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
}

var handlers = {
    'PastNineOClockIntent': function() {
        this.emit(':tell', 'It is past nine o\'clock');
    }
}