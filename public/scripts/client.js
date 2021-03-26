/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function () {
  $("#newTweetForm").submit(onSubmit);
  loadTweets();
});

const timeSinceTweet = (unix) => {
  return moment(unix).fromNow();
};

const createTweetElement = function (tweet) {
  const $tweet = `
  <article class="tweet">
  <div class="tweetTop">
    <div class="nameAndHandler">
      <div class="nameAndFace">
        <div class="profileImg"><img class="littleImg" src=${escape(tweet.user.avatars)}></div>
        <h4>${escape(tweet.user.name)}</h4>
      </div>
      <h4 id="username">${escape(tweet.user.handle)}</h4>
    </div>
    <p class="individualTweet">${escape(tweet.content.text)}</p>
  </div>
  <br>
  <div class="tweetBottom">
    <p class="datePosted">${escape(timeSinceTweet(tweet.created_at))}</p>
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

//Render the tweets
const renderTweets = function (tweets) {
  for (let tweet of tweets) {
    let newTweet = createTweetElement(tweet);
    $('#tweetContainer').prepend(newTweet);
  }
};

//When pressing the submit, load the tweet on the page
const onSubmit = function (event) {
  event.preventDefault();
  const input = $("#tweet-text").val();
  if (input.length <= 0) {
    return $("#noText").slideDown(300).delay(2000).slideUp(600);
  } else if (input.length > 140) {
    return $("#overText").slideDown(300).delay(2000).slideUp(600);
  } else {

    $.ajax({ url: '/tweets', method: 'POST', data: $(this).serialize() })
      .then((res) => {
        location.reload();
      })
      .then(res => {
        this.reset();
      })
      .catch(err => {
        console.log("Error");
      })
  }
};

//Load the tweets on the main page
const loadTweets = function () {
  $.ajax({ url: '/tweets', method: 'GET', dataType: "json" })
    .then((tweets) => {
      renderTweets(tweets);
    })
    .catch(err => {
      console.log("Error");
    })
};

//
const escape = function (str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

