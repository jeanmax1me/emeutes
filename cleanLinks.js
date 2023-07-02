const fs = require('fs');

// Read the tweet links from tweet_links.json
const tweetLinksData = fs.readFileSync('tweet_links.json');
const tweetLinks = JSON.parse(tweetLinksData);

// Clean the tweet links
const cleanedLinks = tweetLinks.map((link) => link.replace('?ref_src=twsrc%5Etfw', ''));

// Save the cleaned links to cleaned_links.json
fs.writeFileSync('cleaned_links.json', JSON.stringify(cleanedLinks, null, 2));

console.log('Cleaned links saved to cleaned_links.json');

