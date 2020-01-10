var test1 = require('./cal');
var assert = require('assert');

describe('Mocha test',function () {
    describe('add test',function () {
        it('return 1+1 = 2',function (done) {
            assert.equal(test1.add(1,1),3);
            done()
        })
    })
})