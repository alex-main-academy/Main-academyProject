function pow(x,n) {
    let result = x;

    for (i = 1; i < n; i++) {
        result *= x;
    }
    return result;
}

console.log( pow(2, 2) )
