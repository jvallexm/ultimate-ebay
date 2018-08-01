const express    = require("express");
const env        = require('dotenv').config();
const port       = process.env.PORT || 8080; // Initialize the port
const app        = express();                // Initializes express

var ebay = require('ebay-api');

var params = {

  // add additional fields
  outputSelector: ['AspectHistogram'],
  storeName: "ultimatecomicsonline",
  paginationInput: 2
};

ebay.xmlRequest({
    serviceName: 'Finding',
    opType: 'findItemsIneBayStores',
    appId: process.env.CLIENT_ID,      // FILL IN YOUR OWN APP KEY, GET ONE HERE: https://publisher.ebaypartnernetwork.com/PublisherToolsAPI
    params: params,
    parser: ebay.parseResponseJson,    // (default)
    globalId: "EBAY-US"
  },
  // gets all the items together in a merged array
  function itemsCallback(error, itemsResponse) {
    if (error) throw error;

    var items = itemsResponse.searchResult.item;
    console.log(itemsResponse);

    console.log('Found', items.length, 'items');
    
    for (var i = 0; i < items.length; i++) {
      console.log('- ' + items[i].title);
    }  
  }
);


app.listen(port, ()=> console.log(`listening on port ${port}`)); // I hear you, dog