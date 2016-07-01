# Overview

This is a React.js Redux boilerplate with a live reload development environment, unit testing, and a release configuration. This was built in one long evening in preparation for a coding interview to have a boilerplate that I could use to easily develop anything thrown at me in a Redux coding challenge.

The following core technologies are used:

* React.js
* Redux
* React Router
* Immutable
* PostCSS with PreCSS plugin
* Webpack with many plugins
* Tape for unit testing
* Enzyme for react unit testing
* Sinon for asynchronous / function unit testing

This needs a lot of work to be production ready as it was only developed in one night and has some slight issues here and there, but is a great starting point to get your hands dirty with Redux.

This code does have the hook in the store for Redux DevTools so go ahead and install that plugin so you can manipulate the global state as you wish!

To view a live example of the release, go to the following URL: <http://cameronperry.com/examples/redux-boilerplate/>

# Getting Started

Hopefully at this point you have Node / NPM installed.

1. Clone the project, and run and install all local dependencies:

  ```
npm install
```

2. I recommend at this point to run the unit tests to make sure everything is working. 16 unit tests should pass.

  ```
npm test
```

3. Once you confirm everything is working you can go ahead and run the live reload coding environment. This will live reload any JS or CSS changes you make so you can quickly develop without refreshing the browser. Running this command does take a few seconds. You will be able to see the app at `http://localhost:8080/`

  ```
npm run dev
```

4. If you want to do a production release you can run the following command to get a full set of files outputted to the `release` directory.

  ```
npm run prod
```

  This command will export a HTML, JS, and CSS file to the `release` directory. You can then open that in your browser directly to confirm that it works.

5. There is also a command to clean up the release directory.

  ```
npm run clean
```

# Conclusion

This is a great starting point for getting your hands dirty with Redux. It also correctly implements the state tree so that you can undo actions and the future actions will correctly adjust.

For example, if you add 1 to the counter several times, then multiply by 2 several times, and then undo one of the additions, it will undo the addition prior to the multiplication actions.

Please be aware that this is not production ready and I would make many changes before calling this a production build.

Let me know if you run into any issues.
