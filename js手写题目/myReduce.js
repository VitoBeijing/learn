Array.prototype.myReduce = function (fn, initialValue) {
    for (let i = 0; i < this.length; i++) {
        if (typeof initialValue === 'undefined') {
            initialValue = fn(this[i], this[i + 1], i + 1, this);
            i++;
        } else {
            initialValue = fn(initialValue, this[i], i, this);
        }
    }
    return initialValue;
};
