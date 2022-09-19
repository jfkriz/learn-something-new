# Jest and Chai

## Using This Project
You will need [node js](https://nodejs.org/en/) with the npm package manager installed on your system. On a mac, you can use [homebrew](https://brew.sh/) to install these, just using `brew install node`.

Assuming you have node and npm installed, open a terminal to this directory and run `npm install`. This will download all the dependencies to the `node_modules` directory.

Once you've successfully installed the required dependencies, you can experiment with the [src/chai.test.js]() file. You can run the contained tests by running `npm test` on the command line. This will execute all the tests once. You can also run `npm run test:watch` to execute the tests once but remain in "watch" mode. This will wait for changes to the test file, and once you make changes and save, it will re-run the tests. This is really handy if you are making a lot of small changes and want to see the results immediately.

## Jest
[Jest](https://jestjs.io/docs/getting-started) is a Javascript testing framework. I've only included it in this project to allow easily running tests that we would have otherwise done in Postman. It is also good to see how you can use the framework, as this is generally useful when testing Javascript code.

## Chai
Chai is a Javascript testing assertion library. It supports BDD-style assertions like `expect(1).to.be.lessThan(2)`. This is the same library that Postman uses with it's `pm.expect()` call.

## Links
* [Chai BDD Documentation](https://www.chaijs.com/api/bdd/)
* [Postman Testing Assertion Examples](https://learning.postman.com/docs/writing-scripts/script-references/test-examples/#common-assertion-examples)