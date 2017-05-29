const Parser = require('./parser');

const parser = Parser({
  columns: ["id", "meaningId", "value"],
  delimiter: "\t"
});
