function howdy() {
    return 'Caitlin Johnson says hey!';
}

console.log(howdy());

var numba = function (string) {
    if (string < 7) {
        return 'What a short little word!';
    }
    if (string > 7) {
        return "I'm sorry, but that's too many to count.";
    }
    if (string === 7) {
        return '7, what a perfect choice!';
    }
};

var message1 = numba('7'.length);
var message2 = numba('seventy'.length);
var message3 = numba('univeristy'.length);
console.log(message1);
console.log(message2);
console.log(message3);

function inception(display, favMovie) {
    display(favMovie);
}

function myNewFunction(favMovie) {
    console.log(favMovie + ' ' + 'is a fantastic movie.');
}

inception(myNewFunction, 'Pitch Perfect');
