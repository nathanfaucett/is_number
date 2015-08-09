var tape = require("tape"),
    isNumber = require("..");


tape("isNumber() should return true when the value is a Number", function(assert) {
    assert.equal(isNumber(null), false);
    assert.equal(isNumber(undefined), false);
    assert.equal(isNumber({}), false);
    assert.equal(isNumber([]), false);
    assert.equal(isNumber(""), false);
    assert.equal(isNumber(/./), false);
    assert.equal(isNumber(function noop() {}), false);
    assert.equal(isNumber(Object(0)), false);

    assert.equal(isNumber(0), true);

    assert.end();
});
