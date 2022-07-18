
require('dotenv').config();
const Twitter = require('twitter-v2');
const config = {
    consumer_key: process.env.consumer_key,
    consumer_secret: process.env.consumer_secret,
    access_token_key: process.env.access_token_key,
    access_token_secret: process.env.access_token_secret
  }

// pass config vars to a new instance of the Twitter class
const client = new Twitter({
    bearer_token: process.env.bearer_token
});


// declare search parameters
var params = {
    q: '#nodejs',
    count: 10,
    result_type: 'recent',
    lang: 'en'
  };

// make the request
async function getTweet(){
    const { data } = await client.get('tweets', { ids: '1228393702244134912' });
console.log(data);
};

// post a tweet
async function postTweet(){
    const { data } = await client.get('tweets', );
console.log(data);
};

getTweet()