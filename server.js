var http = require('http');  
var express = require("express");
var bodyparser = require("body-parser");
var stripe = require("stripe")("sk_test_TwSlpOa3fUoj8k6TPRZLRm0l");

function payment() 
{
	alert("payment")
	//var stripeToken = request.body.stripeToken;
	var stripeToken = "tok_18GUBLCoSFr0j34WgU3gZJnB";

	var charge = stripe.charges.create({
	  amount: 999, // amount in cents, again
	  currency: "eur",
	  source: stripeToken,
	  description: "Example charge"
	}, function(err, charge) {
	  if (err && err.type === 'StripeCardError') {
		// The card has been declined
	  }
	});
}

var server = http.createServer(function(req, res) 
{  
	res.writeHead(200, {
		'Content-Type': 'text/html'
	});
	
	res.write('<!doctype html>\n<html lang="en">\n' + 
    '\n<meta charset="utf-8">\n<title>Test web page on node.js</title>\n' + 
    '<style type="text/css">* {font-family:arial, sans-serif;}</style>\n' + 
    '\n\n<h1>NodeJS Server Page</h1>\n' + 
    '<div id="content"><p>Content:</p><ul><li>None</li></ul></div>' + 
    '\n\n');
	res.end();
	
	payment();
	
}).listen(3000, '127.0.0.1');
console.log('Server running at http://127.0.0.1:3000');