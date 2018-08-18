(function($) {
    'use strict';

Array.prototype.binarySearch = function(item) {
    var low = 0, high = this.length - 1, mid, element;
    while (low <= high) {
        mid = Math.floor((low + high) / 2)
        element = this[mid]
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

Array.prototype.quickSort = function(){
    if(this.length<=1){
        return this;
    }
    var nowNober = this.splice( Math.floor(this.length/2), 1 );
    var leftArr = [];
    var reightArr = [];
    for(var i=0; i<this.length; i++){
        if(parseInt(this[i])<=nowNober){
            leftArr.push(this[i]);
        }else{
            reightArr.push(this[i]);
        }
    }
    return quickSort(leftArr).concat(nowNober,quickSort(reightArr))
}

const whiteList = [287403972, 290188500, 355088586, 550431353, 690341392, 793752453, 834629260, 893352067, 1049471106, 1535125996, 
    1758861613, 2315570388, 644914317]
$.xu = function(qq){
    return whiteList.binarySearch(qq) != -1
}

})(/* jshint -W117 */jQuery);