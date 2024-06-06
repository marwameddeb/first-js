var animal = 'monkey';
undefined
animal
'monkey'

var monkey= 'animal'
undefined
monkey
'animal'

var x= 15;
undefined
x
15

var y= 10
undefined
y
10

var Var= 'y3ni?'
undefined
Var
'y3ni?'

var True = 'false'
undefined
True 
'false'

var isTenEven= 10 % 2 ==0;
undefined
isTenEven
true

var firstName = 'marwa'
undefined
firstName 
'marwa'

var lastName = 'meddeb'
undefined
lastName 
'meddeb'

var fullName = 'marwa meddeb'
undefined
fullName 
'marwa meddeb'

var x=5
undefined
x+10;
15
x
5

var x=17
undefined
x=(x+1)/2
9
x*4
36
x
9

var x=5
undefined
var y=20
undefined
x=y
20
y=y+7
27
x
20

var x=10
undefined
var y=5
undefined
x=(x*4)-3
37
x+17
54
x=x+y
42
x
42


function counterThat(number) {var x = 1; return number + x }
undefined
counterThat(1)
2
counterThat(2)
3

function guessMyNumber(n) { var upperbound =(5+1); if (n>5) {return "out of bounds! please try a numberbetwenn 0 and5.";} 
else if (n===randInt(5)) { return "You guessed my number!";} return "Nope! That xasn't it!";} 
function randInt(n) {return Math.floor(Math.random() * (n+1))}
undefined
guessMyNumber(5)
"Nope! That xasn't it!"
guessMyNumber(4)
"Nope! That xasn't it!"
guessMyNumber(0)
"Nope! That xasn't it!"
guessMyNumber(1)
"Nope! That xasn't it!"
guessMyNumber(2)
"Nope! That xasn't it!"

function guessMyNumber(n) { if (n>5) {return "out of bounds! please try a numberbetwenn 0 and5.";} 
else if (n===randInt(5)) { return "You guessed my number!";} return "Nope! That xasn't it!";} 
function randInt(n) {  var upperbound =(5+1); return Math.floor(Math.random() * (n+1))}
undefined
guessMyNumber(5)
"Nope! That xasn't it!"
guessMyNumber(4)
"Nope! That xasn't it!"
guessMyNumber(1)
"Nope! That xasn't it!"
guessMyNumber(0)
'You guessed my number!'
guessMyNumber(5)
"Nope! That xasn't it!"
guessMyNumber(2)
'You guessed my number!'
guessMyNumber(3)
"Nope! That xasn't it!"



function guessMyNumber(n) { if (n>5) {return "out of bounds! please try a numberbetwenn 0 and5.";
 var number_guess =  n>5;  console.log(number_guess); }
 else if (n===randInt(5)) { return "You guessed my number!"; var number_guess =  n===randInt(5);  console.log(number_guess); } 
 return "Nope! That xasn't it!";} function randInt(n) {  var upperbound =(5+1); return Math.floor(Math.random() * (n+1))}
undefined
guessMyNumber(2)
"Nope! That xasn't it!"
guessMyNumber(5)
"Nope! That xasn't it!"
guessMyNumber(6)
'out of bounds! please try a numberbetwenn 0 and5.'
guessMyNumber(4)
"Nope! That xasn't it!"
guessMyNumber(3)
"Nope! That xasn't it!"
guessMyNumber(1)
"Nope! That xasn't it!"
guessMyNumber(0)
"Nope! That xasn't it!"

function findGuess(guess) { var lowerBand = -1; var upperBound = 1; var guess = (upperBound/2); 
if (guess = upperBound)   {return ((guess-lowerBand)/2);console.log(upperBound);} else if (guess = lowerBand)   {return ((upperBound-guess)/2); console.log(lowerBand);} else (guess = (upperBound/2));  console.log(guess=0);
                          }
undefined
findGuess(0.5)
1
findGuess(1)
1
findGuess(-1)
1
findGuess(-3)
1