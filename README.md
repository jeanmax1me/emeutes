online at : https://gagnerdelargentsurlenet.com/emeutes/index.html  

# emeutes
best of tweets from french riots

Since It is all over the news and especially my Twitter feed, decided to create some sort of best of to work on my JavaScript.

Here were the main steps of this project:

- I created a very basic frontend then proceeded to add some tweets in embed format directly in the HTML. 

- Added media queries for most devices, with a 1 to 5 tweet by row, depending on the width of the device.

- At some point when I added like 30 embed videos, it started to lag pretty hard at the page loading, so it was time to try some JavaScript to only show a select number of the videos.

- Created a script to retrieve the tweet links from my HTML into a JSON (extractTweets.js / tweets.json)

- Created another script to format better the retrieved links because the initial one collected a bunch of useless data and had imperfect link format (cleanLinks.js / cleaned_links.json)

- Then created the script to populate my HTML page with the tweet links stored in my JSON (stored inside my HTML)

- Then the script to only show a fraction (10) of the whole array of tweets on the page (inside the HTML too)

- After that, the script to load more tweets when clicking the "Load More" button, up until the end of the list when the button disappear (in HTML)

- Finally also added a FR/EN script to change language, and an exit button via 'click' eventListeners (languageSwitch.js)


It took me 2 whole days and it was a really fun experience, first time dealing with AJAX , jQuery. I had no idea what both were before that, i thought they were programming languages lol. Also add to install Cheerio, JSDOM, but not "fs" which was conveniently already preinstalled with Node.js 


I had many issues with not understanding Client Side/Server Side code, I have yet to do the OpenClassRoom course on Backend with Node/Express/MongoDB it would have probably been useful for this project. 

Thank to my tech lead ChatGPT who guided me through all of that, I've progressed a lot in my prompt game too. Also installed and configured ESLint the code analysis tool which was useful to find errors here and there.
It is my first time creating entirely a small app and I will sure do more of it, it was really entertaining and learned a lot along the way. 

