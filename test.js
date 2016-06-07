var extractor = require("./index.js");
extractor({path: "./test-file.sif" }, function(err, bom) {
   console.dir(bom); 
});