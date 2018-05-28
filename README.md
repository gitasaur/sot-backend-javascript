# sot-backend-javascript
Backend Javascript Masterclass for Summer of Tech

# Introduction
Hi 👋👋👋

Welcome to the Summer of Tech Masterclass for Backend Javascript.

Topics we'll cover:

* Node.js
* Express
* API's
* Databases

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

Today we'll quickly build our own API using Node and Express. We'll display some data from twitter on a map, and collect and store data in a database.

## Project structure

Have a look at the folder structure of this repo. You'll see we have two folders alongside `package.json` - 'public' and 'server'.

The public folder is mostly completed for us and is the "front-end" to our application. Opening that folder you'll find `index.html` and `app.js` files. Opening `index.html` in the browser opens up a simple Google Map.

The other folder, 'server' is the one we'll be working out of. You'll see there is an empty file called `index.js`, open this in your editor.

## // TODO
* Create a web server to serve our app
* Create our own API
* Get data from Twitter API
* Display data on the map
* Use a database to save data

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