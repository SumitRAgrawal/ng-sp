const RestProxy = require('sp-rest-proxy');

const settings = {
  configPath: './config/private.json', // Location for SharePoint instance mapping and credentials
  port: 8080, // Local server port
  staticRoot: './static' // Root folder for static content
};

const restProxy = new RestProxy(settings);
restProxy.serve();
