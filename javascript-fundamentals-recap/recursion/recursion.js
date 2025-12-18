console.log("===================== RECURSION =====================");

// ===> Example: Factoriel
function factoriel (number)
{
    if (number <= 1) {
        return 1;
    }
    return number * factoriel(number - 1);
}
console.log(factoriel(5));


// ===> Example: Fibonacci
function fibonacci(n) {
    if(n <= 1) {
        return n;
    }
    return fibonacci(n-1) + fibonacci(n-2);

}
console.log("Fibonacci of 5 is ", fibonacci(5));
console.log("Fibonacci of 25 is ", fibonacci(25));
console.log("Fibonacci of 50 is ", fibonacci(50)); 