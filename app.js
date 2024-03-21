// chapter 21
// Q1
// var allLower = userinput.toLowercase();
// Q2
var x = "Haider Khan";
x = x.toLowerCase();
console.log(x);
// Q3
var y = "Haider khan";
y = y.toUpperCase();
console.log(y); 
// Q4
var first = "Haider khan";
var second = first.toLowerCase();
console.log(second);
// Q5
var firstArr = ["Karachi", "Abbotabad"];
var second = firstArr[1].toLowerCase();
console.log(second);
// Q6
// var y = "Haider khan";
// y = y.toUpperCase();
// alert(y);
// Q7
var cityName = "kaRacHi";
var firstChar = cityName.charAt(0).toUpperCase();
var remanChar = cityName.slice(1).toLowerCase();
console.log(firstChar + remanChar);

// chapter 22-25
// Q1
var sameWords = "captain"
var changeWords = sameWords.slice(1,3);
console.log(changeWords);
// Q3
var animal = "elephant";
var middleIndex = Math.floor(animal.length / 2); 
var seg = animal.slice(middleIndex - 2, middleIndex + 2); // Slice out the middle four characters
console.log(seg); 

// Q6
var text = "to be or not be";
var indx = text.indexOf("be");
console.log(indx);
// Q7
var text = "to be or not be";
var indx = text.lastIndexOf("be");
console.log(indx);

// Q8
var txt ="where you want to go and then go to the university"
var index = txt.lastIndexOf("go");
console.log(index);

// Q10
var text = "abcde";
var index2 = text.charAt(2);
console.log(index2);

// Q11
var text = "hi my name is haider khan";
var cha = text.charAt(9);
console.log(cha);

// Q11
var text = "hi my name is haider khan";
var cha = text.charAt(text.length - 1);
console.log(cha);

// Q12
var text = "hi my name is haider khan";
var cha = text.charAt(4);
console.log(cha);














