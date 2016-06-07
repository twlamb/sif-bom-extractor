```js
var extractor = require("sif-bom-extractor");
extractor("[path to your sif file]", function(err, bom) {
    //processed bom comes back
    console.dir(bom); 
});
```