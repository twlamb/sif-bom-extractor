var sifScanner = require("sif-scanner");

module.exports = function(filePath, callback) {
    sifScanner(filePath, /^PN\=/, /^ON\=/,  filter, done);
    
    function filter(item) {
      return true;
    }
    
    function done(err, results) {
        if(err) return callback(err);
        var bom = [];
        results.forEach(function(result) {
            bom.push({
                basemodel: result.PN,
                groups: result.groups,
                description: result.PD,
                quantity: result.QT,
                catalog: result.MC
            }); 
        });
        callback(null, bom);
    }
}
