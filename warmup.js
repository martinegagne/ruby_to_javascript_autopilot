var apples = 14;
console.log(apples);

console.log('I have ' + apples + 'apples.');

var materials = ['wood', 'metal', 'stone'];
var words = {
  elephant: "The world's largest land mammal.",
  school: "A place of learning.",
  iceCream: "A delicious milk-based dessert."
};

var num = 16;

if (num > 10) {
console.log(num + ' is greater than 10.');
} else if (num === 10) {
  console.log(num + ' is exactly 10 ');
} else {
  console.log( num + ' must be less than 10');
}

for (var i = 0; i <10; i ++) {
  console.log("Doing the same thing over and over.");
}

var base = 5
for (var i = 0; i < 20; i ++) {
  console.log( i + base)
}

var total = 0
for (var i = 0; i < 100; i ++) {
  total += i
}
console.log(total);

for(var height = 3; height < 15; height ++) {
  if (height < 9) {
    console.log("You can get on the rollercoaster!");
  } else {
    console.log("You are too short to ride this rollercoaster.");
  }
}

var containers = ['purse', 'wallet', 'backback'];
for (var i = 0; i < containers.length; i ++) {
  console.log(containers[i]);
}

function helloWorld() {
  console.log('Hello world!');
}

helloWorld()

function add(firstNum, secondNum) {
  console.log(firstNum + secondNum);
}

amount = add(5, 7)
