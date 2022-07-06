const Twitter = require('twitter');
const config = {
    consumer_key: process.env.consumer_key,
    consumer_secret: process.env.consumer_secret,
    access_token_key: process.env.access_token_key,
    access_token_secret: process.env.access_token_secret
  }

// pass config vars to a new instance of the Twitter class
const T = new Twitter(config);

// declare search parameters
var params = {
    q: '#nodejs',
    count: 10,
    result_type: 'recent',
    lang: 'en'
  };

// make the request
T.get('search/tweets', params, function(err, data, response) {
    if(!err){
      // This is where the magic will happen
      console.log(data);
    } else {
      console.log(err);
    }
  });