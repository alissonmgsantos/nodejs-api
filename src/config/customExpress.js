const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');

module.exports = function(){
  const app = express();

  app.use(bodyParser.urlencoded({extended: true}))
  app.use(bodyParser.json())

  consign()
   .include('/src/controllers')
   .then('/src/persistencia')
   .into(app);

  return app;
}
