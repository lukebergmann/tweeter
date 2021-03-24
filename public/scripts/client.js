/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function () {
  const tweetData = {
    "user": {
      "name": "Kevin",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@k3vin"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  }

  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]

  const createTweetElement = function (tweet) {
    const $tweet = `
    <article class="tweet">
    <div class="tweetTop">
      <div class="nameAndHandler">
        <div class="nameAndFace">
          <div class="profileImg"><img class="littleImg" src=${tweet.user.avatars}></div>
          <h4>${tweet.user.name}</h4>
        </div>
        <h4 id="username">${tweet.user.handle}</h4>
      </div>
      <p class="individualTweet">${tweet.content.text}</p>
    </div>
    <br>
    <div class="tweetBottom">
      <p class="datePosted">${tweet.created_at}</p>
      <div class="littleLogo">
        <i class="fas fa-flag"></i>
        <i class="fas fa-retweet"></i>
        <i class="far fa-heart"></i>
      </div>
    </div>
  </article>
  `;
    return $tweet;
  };

  const renderTweets = function(tweets) {
    for (let tweet of tweets) {
     let newTweet = createTweetElement(tweet);
     $('#tweetContainer').append(newTweet);
    }
  }
  
  renderTweets(data);
});