const fs = require('fs');

// Read the JSON file
fs.readFile('cleaned_links.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the JSON file:', err);
    return;
  }

  try {
    // Parse the JSON data into an array
    const tweetLinks = JSON.parse(data);

    // Custom comparator function to sort tweets based on tweet ID
    const compareTweets = (tweetA, tweetB) => {
      const idA = tweetA.split("/").pop();
      const idB = tweetB.split("/").pop();
      return idB - idA; // Sorting in descending order
    };

    // Sort the array of tweet links in descending order
    const sortedTweets = tweetLinks.sort(compareTweets);

    // Convert the sorted array to JSON
    const sortedData = JSON.stringify(sortedTweets, null, 2);

    // Write the sorted data to the sorted_links.json file
    fs.writeFile('sorted_links.json', sortedData, 'utf8', (err) => {
      if (err) {
        console.error('Error writing to the JSON file:', err);
      } else {
        console.log('Successfully created sorted_links.json with sorted tweet links.');
      }
    });
  } catch (error) {
    console.error('Error parsing JSON:', error);
  }
});
