```js
var extractor = require("sif-bom-extractor");
extractor({path: "[path to your sif file]" }, function(err, bom) {
    //processed bom comes back
    console.dir(bom); 
});
```

or...

```js
var extractor = require("sif-bom-extractor");
extractor({content: "[sif text content]" }, function(err, bom) {
    //processed bom comes back
    console.dir(bom); 
});
```