(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports', 'module'], factory);
  } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
    factory(exports, module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, mod);
    global.index = mod.exports;
  }
})(this, function (exports, module) {
  'use strict';

  module.exports = {
    ADDRESS: new Error('Not implemented.'),
    COLUMN: new Error('Not implemented.'),
    COLUMNS: new Error('Not implemented.'),
    LOOKUP: require('formula-lookup'),
    HLOOKUP: require('formula-hlookup'),
    INDEX: new Error('Not implemented.'),
    INDIRECT: new Error('Not implemented.'),
    MATCH: new Error('Not implemented.'),
    OFFSET: new Error('Not implemented.'),
    ROW: new Error('Not implemented.'),
    ROWS: new Error('Not implemented.'),
    VLOOKUP: require('formula-vlookup')

  };
});
