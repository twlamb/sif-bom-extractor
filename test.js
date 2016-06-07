var extractor = require("./index.js");
extractor("./test-file.sif", function(err, bom) {
   console.dir(bom); 
});