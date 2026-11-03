/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let newarr=s.trim().split(" ")
    len=newarr.length
    let lastwordlen=newarr[len-1].length
    return lastwordlen
};