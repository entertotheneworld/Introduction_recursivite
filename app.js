// Factorielle itérative
const computeFactorialIt = (n) => {
    var result = 1;
    for (var i = 1; i <= n; i++)
      result = result * i;
    return result;
}

// Factorielle récursive
const computeFactorialRec = (n) => {
    // This is the base case.
    if (n === 0) return 1;
    // This is the recursive one.
    else return n * computeFactorialRec(n - 1);
}

// Puissance d'un nombre itérative
const computePowerIt = (n, p) => {
    let result = n;
    for (var i = 1; i < p; i++)
        result = result * n;
    return result
}

// Puissance d'un nombre récursive
const computePowerRec = (n, p) => {
    if (p === 0) return 1;
    else return n * computePowerRec(n, p - 1);
}

// Racine carrée
const computeSquareRoot = (n, p) => {
    if (p === 0) return 0;
    else return 
}
const intSqRootRecursive = (x) => {
    //square roots of 0 and 1 are trivial and x /2 for
    //the y0 parameter will cause a divide-by-zero exception
    if (x == 0 || x == 1) {
        return x;
    }
    //starting with x /2 avoids overflow issues
    return intSqRootRecursive ( x - 2);
}
console.log(intSqRootRecursive(4))


// Nombre premier
const isPrimeNumber = (n, i = 2) => {
    // Base cases
    if (n <= 2)
        return (n == 2) ? true : false;
    if (n % i == 0)
        return false;
    if (i * i > n)
        return true;
 
    // Check for next divisor
    return isPrimeNumber(n, i + 1);
}

// Trouver un nombre premier
const findSupPrime = (n) => {
    return (isPrimeNumber(n)) ? n : findSupPrime(n + 1)
}