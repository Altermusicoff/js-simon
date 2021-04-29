function getRnd(min, max) {
    var minRnd = min;
    var maxRnd = max - minRnd + 1;
    var rnd = Math.floor(Math.random() * maxRnd) + minRnd;
    return rnd;
};


var myArray = [];
var myNumbers = [];


while(myArray.length < 5){
    var rndNum = getRnd(1, 100);
    console.log(rndNum);
    if (!myArray.includes(rndNum)) {
        myArray.push(rndNum);
        
    }

};
console.log(myArray);
alert("here's for you 5 number to remember: " + myArray);

setTimeout(function () {
    for (var i = 0; i < 5; i++) {
        var myNum = parseInt(prompt('scrivi i numeri memorizzati prima: '));
        for (var x = 0; x < myArray.length; x++) {
            if (myNum == myArray[x]) {
                myNumbers.push(myNum);
            }

        }

    }

alert('Hai indovinato ' + myNumbers.length + ' numeri: ' + myNumbers);
}, 5000);
