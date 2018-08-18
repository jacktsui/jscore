(function($) {
    'use strict';

/* jshint -W098 */
function quickSort(array){/* jshint +W098 */
    if(array.length<=1){
        return array;
    }
    var nowNober = array.splice( Math.floor(array.length/2), 1 );
    var leftArr = [];
    var reightArr = [];
    for(var i=0; i<array.length; i++){
        if(parseInt(array[i])<=nowNober){
            leftArr.push(array[i]);
        }else{
            reightArr.push(array[i]);
        }
    }
    return quickSort(leftArr).concat(nowNober,quickSort(reightArr))
}

function binarySearch(array, item) {
    var low = 0, high = array.length - 1, mid, element;
    while (low <= high) {
        mid = Math.floor((low + high) / 2)
        element = array[mid]
        if (element < item) {
            low = mid + 1
        } else if (element > item) {
            high = mid - 1
        } else {
            return mid
        }
    }
    return -1
}

const whiteList =  [287403972, 290188500, 355088586, 550431353, 690341392, 793752453, 834629260, 893352067, 1049471106, 1535125996, 
    1758861613, 2315570388, 644914317]
$.xu = function(qq){
    return binarySearch(whiteList, qq) != -1
}

})(/* jshint -W117 */jQuery);