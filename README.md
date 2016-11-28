# Database Server

An app that allows you to store key-value pairs and then retrieve the value using the key.

## Structure

The program is split into a MVC format. There are no views as the response was simply passed in from the controller. Key-value pairs are stored in the keyManager model.

## Setup

To run the app:

```
$ git clone [REPO]
$ cd database-server
$ npm install
$ node app.js
```

## Testing

To test the app:

```
$ mocha
or
$ mocha test
```
