/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    
   // 1. Declare and initialize the tracking variable
    let hasBeenCalled = false; 
    
    return function(...args){
        if (!hasBeenCalled) {
            // 2. Flip the flag so future calls are blocked
            hasBeenCalled = true; 
            return fn(...args);
        }
        return undefined;
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
