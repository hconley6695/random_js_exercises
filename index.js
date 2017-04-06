

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

// ////////

/*Use the map() method to take the array of bill amounts shown below, and 
create a second array of numbers called totals that shows the bill amounts with a 15% tip added.*/
var bills = [50.23, 19.12, 34.01, 100.11, 12.15, 9.90,
29.11, 12.99, 10.00, 99.22, 102.20, 100.10, 6.77, 2.22];

// your code goes here
var totals = bills.map(function(money) {
    var eachTotal = money * 1.15;
    var roundedTotal = eachTotal.toFixed(2);
    var num = Number(roundedTotal);
    return num;
})
console.log(totals);

// ///////////////////////////
// Loop over arrays in array.  print out even if number is even and odd if number is odd
var numbers = [
    [ 241, 12, 23, 12, 44, 45, 78, 66, 223, 3 ],
    [ 34, 2, 1, 553, 23, 4, 66, 23, 4, 55 ],
    [ 67, 56, 45, 553, 49, 55, 5, 428, 452, 3 ],
    [ 12, 31, 55, 445, 78, 44, 674, 224, 4, 21 ],
    [ 5, 2, 3, 52, 12, 51, 44, 1, 67, 5 ]
];
 
// your code goes here

for (var row = 0; row < numbers.length; row++) {
    for (var col = 0; col < numbers[row].length; col++) {
        if (numbers[row][col] % 2 === 0) {
            numbers[row][col] = "even";
            console.log(numbers[row][col]);
        } else {
            numbers[row][col] = "odd";
            console.log(numbers[row][col]);
        }
    }  
}

console.log(numbers);

// ////////////////////////
// Create an object called facebookProfile. The object should have 3 properties:

// your name
// the number of friends you have, and
// an array of messages you've posted (as strings)
// The object should also have 4 methods:

// postMessage(message) - adds a new message string to the array
// deleteMessage(index) - removes the message corresponding to the index provided
// addFriend() - increases the friend count by 1
// removeFriend() - decreases the friend count by 1

var facebookProfile = {
    name: "Heather",
    friends: 200,
    messages:["How's it going?", "talk to you at 5pm", "LOL"],
    postMessage: function postMessage(message) {
        facebookProfile.messages.push(message);
        return facebookProfile;
    },
    deleteMessage: function deleteMessage(index) {
        facebookProfile.messages.splice(index, 1);
        return facebookProfile;
    },
    addFriend: function addFriend() {
        facebookProfile.friends++;
        return facebookProfile.friends;
    },
    removeFriend: function removeFriend() {
        facebookProfile.friends--;
        return facebookProfile.friends;
    }
}

console.log(facebookProfile.addFriend());
console.log(facebookProfile.removeFriend());
console.log(facebookProfile.postMessage("What's for dinner?"));
console.log(facebookProfile.deleteMessage(1));

// //////////////////////

var s = "audacity";

var udacityizer = function(s) {  
    // Right now, the variable s === "audacity"
    // Manipulate s to make it equal to "Udacity"
    // Your code goes here!
    var letter = s[1].toUpperCase();
    console.log(letter);  

    var string = s.slice(2, s.length);
    console.log(string);

    var newStr = letter + string;
    console.log(newStr);
};

udacityizer(s);

/////////////////////
var sampleArray = [0,0,7];

var incrementLastArrayElement = function(_array) {
    var newArray = [];

    var last = _array[_array.length - 1];
    var increaseLast = last + 1;
    _array.pop();
    _array.push(increaseLast);
    newArray = _array;

    return newArray;

};

console.log(incrementLastArrayElement(sampleArray));


// //////////////////

var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
    var finalName = oldName;

    var array = finalName.split(" ");
    var firstName = array[0];
    var changeToLow = firstName.toLowerCase();
    var separate = changeToLow.split('');
    var upperFirstLetter = separate[0].toUpperCase();
    separate.shift();
    separate.unshift(upperFirstLetter);
    firstName = separate.join('');

    var lastName = array[1];
    lastName = lastName.toUpperCase();

    finalName = firstName + " " + lastName;

    

    return finalName;
};

// Did your code work? The line below will tell you!
console.log(nameChanger(name));






