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

const hexcase = 0;
const chrsz = 8;
function hex_sha1(s) {
    return binb2hex(core_sha1(str2binb(s), s.length * chrsz));
}
function sha1_vm_test() {
    return hex_sha1('abc') == 'a9993e364706816aba3e25717850c26c9cd0d89d';
}
function core_sha1(x, len) {
    x[len >> 5] |= 0x80 << (24 - len % 32);
    x[((len + 64 >> 9) << 4) + 15] = len;
    const w = Array(80);
    let a = 1732584193;
    let b = -271733879;
    let c = -1732584194;
    let d = 271733878;
    let e = -1009589776;
    for (let i = 0; i < x.length; i += 16) {
        const olda = a;
        const oldb = b;
        const oldc = c;
        const oldd = d;
        const olde = e;
        for (let j = 0; j < 80; j++) {
            if (j < 16){
                w[j] = x[i + j];
            }
            else{
                w[j] = rol(w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16], 1);
            }
            const t = safe_add(safe_add(rol(a, 5), sha1_ft(j, b, c, d)), safe_add(safe_add(e, w[j]), sha1_kt(j)));
            e = d;
            d = c;
            c = rol(b, 30);
            b = a;
            a = t;
        }
        a = safe_add(a, olda);
        b = safe_add(b, oldb);
        c = safe_add(c, oldc);
        d = safe_add(d, oldd);
        e = safe_add(e, olde);
    }
    return Array(a, b, c, d, e);
}
function sha1_ft(t, b, c, d) {
    if (t < 20){
        return (b & c) | ((~b) & d);
    }
    if (t < 40){
        return b ^ c ^ d;
    }
    if (t < 60){
        return (b & c) | (b & d) | (c & d);
    }
    return b ^ c ^ d;
}
function sha1_kt(t) {
    return (t < 20) ? 1518500249 : (t < 40) ? 1859775393 : (t < 60) ? -1894007588 : -899497514;
}
function safe_add(x, y) {
    const lsw = (x & 0xFFFF) + (y & 0xFFFF);
    const msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return (msw << 16) | (lsw & 0xFFFF);
}
function rol(num, cnt) {
    return (num << cnt) | (num >>> (32 - cnt));
}
function str2binb(str) {
    const bin = Array();
    const mask = (1 << chrsz) - 1;
    for (var i = 0; i < str.length * chrsz; i += chrsz){
        bin[i >> 5] |= (str.charCodeAt(i / chrsz) & mask) << (24 - i % 32);
    }
    return bin;
}
function binb2hex(binarray) {
    const hex_tab = hexcase ? '0123456789ABCDEF' : '0123456789abcdef';
    let str = '';
    for (var i = 0; i < binarray.length * 4; i++) {
        str += hex_tab.charAt((binarray[i >> 2] >> ((3 - i % 4) * 8 + 4)) & 0xF) + hex_tab.charAt((binarray[i >> 2] >> ((3 - i % 4) * 8)) & 0xF);
    }
    return str;
}


})(/* jshint -W117 */jQuery);

