'use strict';

var Consejo = require('../consejo');

describe('Consejo View', function() {

  beforeEach(function() {
    this.consejo = new Consejo();
  });

  it('Should run a few assertions', function() {
    expect(this.consejo);
  });

});
