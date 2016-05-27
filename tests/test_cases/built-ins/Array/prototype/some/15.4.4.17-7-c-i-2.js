// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.4.4.17-7-c-i-2
description: >
    Array.prototype.some - element to be retrieved is own data
    property on an Array
includes: [runTestCase.js]
---*/

function testcase() {

        var kValue = {};

        function callbackfn(val, idx, obj) {
            if (idx === 0) {
                return kValue === val;
            }
            return false;
        }

        return [kValue].some(callbackfn);
    }
runTestCase(testcase);