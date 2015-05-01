var assert = require("assert"),
    capitalize = require("../src/index");


describe("capitalize(string : String[, allWords : Boolean])", function() {
    it("should capitalize string", function() {
        assert.equal(capitalize("string-string", false), "String string");
        assert.equal(capitalize("string-string", true), "String String");
        assert.equal(capitalize("string-string"), "String String");
    });
});
