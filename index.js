

var number = 2;

if (number % 2 === 0) {
    console.log("even");
} else {
    console.log("odd");
}

// ///////////////

// change the value of `musicians` to test your conditional statements
var musicians = 0;

// your code goes here
if ( musicians > 4) {
    console.log("this is a large group");
} else if (musicians === 4) {
    console.log("quartet");
} else if (musicians === 3) {
    console.log("trio");
}else if (musicians === 2) {
    console.log("duet");
}else if (musicians === 1) {
    console.log("solo");
}else {
    console.log("not a group");
}

// ///////////////////
// FUNCTION DECLARATION 
function laugh(num) {
    var msg = "";
    for (var i = 1; i <= num; i++) {
        if (i === num) {
            msg += "ha!";
        } else {
            msg += "ha";
        }
    }
    return msg;
}

console.log(laugh(3));

// OR FUNCTION EXPRESSION
var laugh = function(num) {
    var msg = "";
    for (var i = 1; i <= num; i++) {
        if (i === num) {
            msg += "ha!";
        } else {
            msg += "ha";
        }
    }
    return msg;
}

console.log(laugh(3));



// //////////////
var num = 20;

while (num <= 99 && num >= 1) {
    if (num >= 3) {
        console.log(num + ' bottles of juice on the wall! ' + num + ' bottles of juice! Take one down, pass it around...' + (num - 1) + ' bottles of juice on the wall!');
    } else if (num === 2) {
        console.log(num + ' bottles of juice on the wall! ' + num + ' bottles of juice! Take one down, pass it around...' + (num - 1) + ' bottle of juice on the wall!');
    } else {
        console.log(num + ' bottle of juice on the wall! ' + num + ' bottle of juice! Take one down, pass it around...' + (num - 1) + ' bottles of juice on the wall!');
    }
    num = num - 1;
}


// ///////////
// UDACITY GIVES YOU FIRST FUNCTION AND YOU MUST CALL IT IN SECOND FUNCTION
function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
    line += "e";
  }
  return line + "\n";
}


function buildTriangle(num){
    var string = "";
    for(var i = 1; i <= num; i++){
        var result = makeLine(i);
        string = string.concat(result);
    }
    return string;
}

console.log(buildTriangle(10));


// ///////


var cry = function() {
    return "boohoo!";
}
console.log(cry());


// ////////
/*
 * Programming Quiz: Another Type of Loop (6-8)
 * 
 * Use the existing `test` variable and write a `forEach` loop 
 * that adds 100 to each number that is divisible by 3.
 * 
 * Things to note: 
 *  - use an `if` statement to verify code is divisible by 3
 *  - use `console.log` to print the `test` variable when you're finished looping
 */

var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4, 
            19, 300, 3775, 299, 36, 209, 148, 169, 299, 
            6, 109, 20, 58, 139, 59, 3, 1, 139];

// Write your code here
test.forEach(function(num) {

    if (num % 3 === 0) {
        var num2 = num + 100;
        console.log(num2);       
        return num2;
    } else {
        console.log(num);       
        return num;
    }


});
console.log(test);




