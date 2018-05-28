# sot-backend-javascript
Backend Javascript Masterclass for Summer of Tech

# Introduction
Hi 👋👋👋

Welcome to the Summer of Tech Masterclass for Backend Javascript.

Topics we'll cover:

* Node.js
* Express
* API's

## Prerequisites / Install

* A basic understanding of JavaScript
* [Node.js](https://nodejs.org/) installed
* An editor of your choice ([VS Code](https://code.visualstudio.com/) is great)
* Git
* This repo cloned/downloaded on your computer
* [nodemon](https://github.com/remy/nodemon) installed (`npm i -g nodemon`)


# Node JS

### About Node
* Node JS is a javascript “runtime”, on the desktop rather than in the browser
* It’s “back end” as its generally used for databases, APIs 
* Install it from [https://nodejs.org/](https://nodejs.org/) (get the latest stable version)
Modern - most web companies use it one way or another
* A great scripting language - most employers want you to know at least one!
* Based off Chrome’s V8 Engine, run out of your Terminal

### Differences to a browser

* Browsers were designed to manipulate web pages.
* Node was designed to manipulate your computer (files, I/O, etc)
* `window` & `document` on chrome, `global` & `process` on node

### Have a quick play

In your browser console:

```
$ let myVar = 9001;
$ myVar
$ window
$ document
```
This should print `9001`, the `window` and `document` variables (big long bits of JSON)

Now, let's try the same in node!

```
$ node
> let myVar = 9001;
> myVar
> window
> document
```

This shouldm also print `9001` - the same as the browser! But it should throw an error `ReferenceError: window is not defined` when trying to access `window` and `document`.

These variables are specific to a browser - which node is not!

However, we do have some special variables which are unique to node:

```
$ node
> process
```

This should return the `process` object, containing information about the system. e.g. OS and I/O' - a browser can't do this!

## Why is node awesome?

* Browser and server talk the same language - authentication is easy, no parsing, json everywhere
* ery resource efficient
* Runs on all computers (and containers Docker etc)
* Javascript is awesome, it’s everywhere ([nodebots](http://nodebots.io/))

# Let's make some stuff!

Today we'll quickly build our own API using Node and Express. We'll create our own custom search feed for Twitter.

## Project structure

Have a look at the folder structure of this repo. You'll see we have two folders alongside `package.json` - 'public' and 'server'.

The public folder is mostly completed for us and is the "front-end" to our application. Opening that folder you'll find `index.html` and `app.js` files. Opening `index.html` in the browser opens up a simple page with a form to add a new search subject.

The other folder, 'server' is the one we'll be working out of. You'll see there is an empty file called `index.js`, open this in your editor.

## // TODO
* Create a web server to serve our app
* Get data from Twitter API
* Create our own API

# Web server

One of the common uses for node is creating a Web Server - a program that serves files over the web. Express is a common framework for doing this in node

## Express

* Web framework for Node
* [https://expressjs.com/](https://expressjs.com/)
* Lots of support/middleware
* Handles routing etc
* Install via `npm i express`

### Express “Hello world”

First, let's install Express. In your terminal (make sure you've cd'd into the root of the project folder):
```
$ npm i express
```
Now we can include express in our project.

Next, in `server/index.js`:
```
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(3000, () => console.log('Our app is listening on port 3000!'));
```

```
$ node server/index.js
```

This should have printed "`Our app is listening on port 3000!`" to the console. If you got an error, make sure you are in the right directory and have express installed.

Now, open your browser to [http://localhost:3000](http://localhost:3000) and you should see "`Hello world!`".

Note: The terminal process hasn't ended. It's currently running the server. We can only access [http://localhost:3000](http://localhost:3000) while the server is running. To end the process, hit `CTRL + C`.

## Routing
`app.get()` controls a GET (more on GET later) method to a url (first param) 
`'/'` is the root.
* Have a go at changing the url and visiting it in your browser.
* Change `'/'` to `'/hello'`, restart the web server, then visit [http://localhost:3000/hello](http://localhost:3000/hello)

## nodemon
If you didn't install nodemon before, install it with `npm i -g nodemon`
* “Ugh I hate having to restart that file each time”
* Use `nodemon` instead of `node server/index.js`
* It looks at `package.json`'s `"main"` path and runs code from that.
* Watches for file changes - reloads as needed
* Written entirely in Node!

Restart the server with `nodemon`.

## Express Static Files
“Static” files mean files that don’t change - they might be html, images, CSS files, and JavaScript - anything you want to be publically accessible.

https://expressjs.com/en/starter/static-files.html

In `server/index.js`, add at the top:
```
const path = require('path');
```
`path` is a special module that we've imported. Node comes with a few useful modules that we don't have to install, such as `fs` (file service, for manipulating files), but we still have to `require('fs')` if we want to use them.

Next, lets add the static directory that we want to serve.
```
app.use(express.static(path.join(__dirname, '../public')));
// remove/comment out this next line!
// app.get('/', (req, res) => res.send('Hello World!'));
``` 

Now when we go to [http://localhost:3000](http://localhost:3000) we should see our map, again.

For reference, this is what your `index.js` file should now look like:

```
const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => console.log('Our app is listening on port 3000!'));
```

It opens the `index.html` file because it looks for a file called 'index', and if one exists it serves that.

So, we're serving files 🤟

But, the real fun is creating an API to serve data.

# APIs

## What's an api?

The simple answer, it's usually a collection of URLs (endpoints) that return data, instead of a webpage.

e.g. [https://api.giphy.com/v1/gifs/translate?s=superman&api_key=dc6zaTOxFJmzC](https://api.giphy.com/v1/gifs/translate?s=superman&api_key=dc6zaTOxFJmzC)

Heading to that link in your browser, should return a bunch of data related to superman gifs!

Or. In your browser's console, paste in:

```
fetch('https://api.giphy.com/v1/gifs/translate?s=superman&api_key=dc6zaTOxFJmzC')
.then((res) => res.json()
.then((body) => console.log(body)));
```

Protip: Giphy is awesome. Use `/giphy [something]` in slack to generate random gifs to share. 

## How to find APIs?

Most tech companies will have one. Hit up google for them!

e.g. google "Trade Me API"

Favor the ones written well, with good code examples.

## Can I access every public API?

* No.
* Well. Kinda. If you're polite.
* Let's look at Authorization.

## API Authorization

* Most API's want to know who is consuming them.
* Generally you will need to pass a unique key or token with your request to authorize yourself

This was that `api_key` param we passed into the giphy URL before: **api_key=dc6zaTOxFJmzC** 

* Generally before you use an API a company will make you sign up before they hand over a key.
* These keys allow them to do things like rate limit your requests

## Lets make our own API

First we need to see what the data we are working with looks like.

We'll look at the twitter api docs to see what is returned.

https://developer.twitter.com/en/docs/tweets/search/api-reference/get-search-tweets.html

Now, in `index.js`

```
const myData = {
        statuses: [
            { text: 'hello im a tweet'}
        ]
    };

app.get('/api/results', (request, response) => {
    response.json(myData);
});
```

`response.json({ data goes here })` tells the browser to return in JSON format whatever we pass in (our myData object in this case). We can also use `response.send()`, as well of a bunch of other methods to return data/render pages.

We should see our data come through on the front end.

### Connecting to twitter

We'd usually first make an account, then request for api keys. But I've gone ahead and done that for us.

Twitter have also supplied [a nice module](https://www.npmjs.com/package/twitter) to use their API in Node applications.

We can install this with:
```
npm i twitter
``` 

Then add the import statement up the top of `index.js`:
```
const Twitter = require('twitter');
```

Then in `index.js`
```
var client = new Twitter({
    consumer_key: 'Qr4aLdymVjqPa0yfo3PDhOIzV',
    consumer_secret: '4ONlJHN4sB2wcIT5TlVv6qAp241EbaRpfvHSYVA0BRt2dbcs7a',
    access_token_key: '49913463-vDAqrW57QEJ3MeIdjGZ44SySVIUyxuejBTMvK0Zex',
    access_token_secret: 'vnUeDACnevhjrWuVDppKevuvwzU0cntFiuliHs7Uu0xm0'
  });
```

### Getting live data through

Let's change our results endpoint to bring through some real data:

```
app.get('/api/results', (req, res) => {
    client.get('search/tweets', { q: 'dogs', count: 100 }, function(error, tweets, response) {
        res.json(tweets);
    });
});
```

Hopefully, we're getting data back relating to tweets about dogs.

## Subjects

Add a subject endpoint:

```
const subjects = [];

app.post('/api/subjects', (request, response) => {
    let newSubject = request.body.subject;
    subjects.push(newSubject);

    response.redirect('/'); // Refresh page
});
```

You'll notice we are working with `request.body.subject`.

This comes from when submitted (`action`).

But, to get access to this we first need to add a small bit of middleware.

## Body parser

Body parser converts the text that comes from a form and places it in a "body" object of a `request`.

Install it:
```
npm i body-parser
```

Include it:
```
const bodyParser = require('body-parser');

// Middleware
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
```

Now, as we add subjects, we can push them to the `subjects` array.

## Getting searches

Home stretch! We only need an endpoint for adding searches.

In `index.js`
```
app.get('/api/subjects', (request, response) => {
    response.json(subjects);
});
```

Now we just need to alter the search query.

```
    client.get('search/tweets', { q: subjects.join(' OR '), count: 100 }, function(error, tweets, response) {
        res.json(tweets);
    });
```

Trusting all went well - we should be able to see the data we put in, and use it!