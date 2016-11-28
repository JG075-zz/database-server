global.assert = require('assert');
global.http = require('http');
global.app = require('../server');
global.Browser = require('zombie');
global.browser = new Browser();
