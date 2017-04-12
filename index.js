var Alexa = require('alexa-sdk');

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
}

var handlers = {
    'PastNineOClockIntent': function() {
        var nineOClock = Date.now();
        nineOClock.setHours(21);
        nineOClock.setMinutes(0);
        if (nineOClock - Date.now() > 0) {
            this.emit(':tell', 'There is still some time, not nine o\'clock yet');
        } else {
            this.emit(':tell', 'It is past nine o\'clock');
        }
    }
}