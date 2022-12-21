"use strict";
exports.__esModule = true;
exports.BubbleSortByStep = void 0;
var BubbleSortByStep = /** @class */ (function () {
    function BubbleSortByStep() {
    }
    BubbleSortByStep.bubbleSortByStep = function (list) {
        var needNextPass = true;
        for (var k = 0; k < list.length && needNextPass; k++) {
            needNextPass = false;
            for (var i = 0; i < list.length - k; i++) {
                if (list[i] > list[i + 1]) {
                    console.log("Swap" + list[i] + "with" + list[i + 1]);
                    var temp = list[i];
                    list[i] = list[i + 1];
                    list[i + 1] = temp;
                    needNextPass = true;
                }
            }
            if (needNextPass == false) {
                console.log("Aray may be sorted and next pass not needed");
                break;
            }
            console.log("List after the" + k + "sort:");
            for (var j = 0; j < list.length; j++) {
                console.log(list[j] + "\t");
            }
        }
        console.log();
    };
    BubbleSortByStep.number = [8, 3, 6, 1, 4, 10, 2, 50];
    return BubbleSortByStep;
}());
exports.BubbleSortByStep = BubbleSortByStep;
