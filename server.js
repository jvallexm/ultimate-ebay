const express    = require("express");
const env        = require('dotenv').config();
const port       = process.env.PORT || 8080; // Initialize the port
const app        = express();                // Initializes express
const eBay       = require('ebay-node-api')
 
const ebay = new eBay({
    clientID: process.env.CLIENT_ID
})

app.listen(port, ()=> console.log(`listening on port ${port}`)); // I hear you, dog