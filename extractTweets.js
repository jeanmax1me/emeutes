const fs = require('fs');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

// Read the HTML file
const html = fs.readFileSync('./index.html', 'utf-8');

// Create a DOM object
const dom = new JSDOM(html);

// Get the content-item divs
const contentItems = dom.window.document.querySelectorAll('.content-item');

// Array to store the extracted links
const links = [];

// Loop through each content-item div
contentItems.forEach((contentItem) => {
  // Get the tweet links
  const tweetLinks = Array.from(contentItem.querySelectorAll('a[href*="status"]'));
  if (tweetLinks.length > 0) {
    // Get the last tweet link
    const lastTweetLink = tweetLinks[tweetLinks.length - 1];
    const link = lastTweetLink.getAttribute('href');
    links.push(link);
  }
});

// Write the links array to a JSON file
fs.writeFileSync('tweet_links.json', JSON.stringify(links, null, 2));

console.log('Links extracted successfully.');
