'use strict';

let express = require('express');
let router = express.Router();
let contactUs = require('./controllers/contact-us');
let user = require('./controllers/user');

class Api {
	constructor() {
		this.router = router;
		this.init();
	}

	init() {

		this.router.post('/contact-us', contactUs.save.bind(express));
        this.router.post('/register', user.save.bind(express));
        
        
	}
}

module.exports = new Api().router;