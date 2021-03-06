'use strict';

(function () {
  global["REWIREMOCK_HOISTED"] = global["REWIREMOCK_HOISTED"] || [];
  global["REWIREMOCK_HOISTED"].push(function (rewiremock) {
    rewiremock.enable();


    rewiremock('common/Component1').by('common/Component2');
    rewiremock('common/Component2/action').with({
      action: () => {}
    });
    rewiremock('common/selectors').mockThrough(() => _sinon2.default.stub());
  });
})();

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

var _rewiremock = require('rewiremock');

var _rewiremock2 = _interopRequireDefault(_rewiremock);

var _Component = require('common/Component1');

var _Component2 = _interopRequireDefault(_Component);

var _selectors = require('common/selectors');

var _selectors2 = _interopRequireDefault(_selectors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_rewiremock2.default.disable();

const b = 1;
let a = b;