function add(a,b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Both arguments must be numbers');
    }
    return a + b;
}

function subtract(a,b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Both arguments must be numbers');
    }
    return a - b;
}

function multiply(a,b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Both arguments must be numbers');
    }
    return a * b;
}

const name = 'Tolukoro Emmanuel';

module.exports = {
    add,
    subtract,
    multiply,
    name
};