const csvParser = require('csv-parse');

module.exports = function(config){
  const parser = csvParser(config);
  
  parser.on('error', function(err){
    console.log(err.message);
  });
  
  parser.on('finish', function(){
    console.log('parser completed');
  });
  
  return parser;
};
