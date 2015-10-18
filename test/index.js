var tape = require("tape"),
    capitalize = require("..");


tape("capitalize(string : String[, allWords : Boolean])", function(assert) {
    assert.equal(capitalize("string-string", false), "String string");
    assert.equal(capitalize("string-string", true), "String String");
    assert.equal(capitalize("string-string"), "String String");
    assert.end();
});
