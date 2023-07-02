const fs = require("fs");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

// Read the existing HTML file
const html = fs.readFileSync("./index.html", "utf8");

// Create a virtual DOM using jsdom
const dom = new JSDOM(html);
const { document } = dom.window;

// Embed the tweet content
const tweetContent = `

`;

// Create a new div container for each tweet content
const newDiv = document.createElement("div");
newDiv.className = "content-item";
newDiv.innerHTML = tweetContent;

// Append the new div to the main content section
const mainContent = document.querySelector(".main-content");
mainContent.appendChild(newDiv);

// Get the updated HTML content
const updatedHtml = dom.serialize();

// Write the updated HTML content back to the file
fs.writeFileSync("./index.html", updatedHtml, "utf8");

console.log("HTML file updated successfully.");

//--------------------------------------------------------------------------------------------



<script>
// Function to fetch the HTML representation of a tweet
async function fetchTweetHTML(url) {
  const response = await fetch(`https://publish.twitter.com/oembed?url=${encodeURIComponent(url)}`);
  const data = await response.json();
  return data.html;
}

// Function to fetch the tweets from the JSON file
async function fetchTweets() {
  const response = await fetch('tweets.json');
  const data = await response.json();
  return data;
}

// Function to render the tweets
async function renderTweets() {
  const tweets = await fetchTweets();
  const tweetContainer = document.getElementById('main-content');

  tweets.forEach(async tweet => {
    const tweetElement = document.createElement('div');
    tweetElement.classList.add('content-item');
    tweetContainer.appendChild(tweetElement);

    // Fetch the HTML representation of the tweet
    const tweetHTML = await fetchTweetHTML(tweet.link);

    // Set the tweet content
    tweetElement.innerHTML = tweetHTML;

    // Render the tweet widget
    if (window.twttr) {
      window.twttr.widgets.load(tweetElement);
    }
  });
}

// Load more button event listener
const loadMoreButton = document.getElementById('loadMoreButton');
loadMoreButton.addEventListener('click', renderTweets);

// Initial rendering of tweets
renderTweets();
</script>
