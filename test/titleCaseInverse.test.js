const chai = require("chai").should();
const titleCaseInverse = require('../helpers/titleCaseInverse/titleCaseInverse');

describe("Change program title to path name", function(){
  it("'Simple Path' becomes 'simple-path'", function(){
    titleCaseInverse("Simple Path").should.equal("simple-path");
  })
})