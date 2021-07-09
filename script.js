
var c = 'hii'
console.log(typeof c);
var d = true;
console.log(typeof d);
var e =45;
console.log(typeof e)
var brand = ["maruti" , "mercedez" , "audi", "rollsroyz"];
console.log(typeof (brand));
alert("i purchased "  +brand[2])
var mycar = {brand:"audi" , model:"r8", varient:"2021" , color:"red" };
console.log(typeof mycar);
console.log("i purchased " +mycar.brand  )
console.log("i purchased " +mycar.model  )
console.log("i purchased " +mycar.varient )
console.log("i purchased " +mycar.color  )
const num = prompt("enter a num");
console.log("you entered "  +num);
document.write("you gave value of num is  " +num);
document.write("<br/>")
document.writeln("you gave value of num is  " +num);
var a=34;
var b=45;
var c= a+b;
console.log("the addition is " +c);
// document.write("the addition is " +c)
var d= a-b;
console.log("the subtraction is " +d);
var e= a*b;
console.log("the multiplication is " +e);
var f= a/b;
console.log("the divide is " +f);
var g= a%b;
console.log("the module is " +g);

var dd = (a == b);
console.log("equilaty between a and b is " +dd);

var ff = (a<b);
console.log("a is less than b  " +ff);

var gg = (a>b);
console.log("a is grater than b " +gg);

var ff = (a<=b);
console.log("a is less than or equal to  b  " +ff);

var gg = (a>=b);
console.log("a is grater than or equal to  b " +gg);

var yy= (a!=b);
console.log("a is not equal to " +yy)

if (a ==4 && b==34)
{
  console.log("a is 4 and b is 34")
}else{
  console.log("a is not 4 and b is not 34")
}

if (!(a ==4 && b==34))
{
  console.log("a is 4 and b is 34")
}else{
  console.log("a is not 4 and b is not 34")
}
var age = prompt('enter you age ');
console.log("you entereed your age is " +age);
if(age >=18)
{
  alert('you can vote for india');
}
else if (age <18)
{
  alert('you cannot vote');
}


PROTOTYPE IN JJAVASCRIPT
function person(first , last , age){
  this.firstname = first;
  this.lastname = last;
  this.age= age;
}

person.prototype.phone = 9896919155;

var pr1 = new person("kunal" , "arora" , 18);
document.write('<br>')
document.write('<br>')
document.write("your namme is " +pr1.firstname + " with last name " +pr1.lastname +" and age is " + pr1.age +" and your number is " +pr1.phone);

FORM SUBMISSION 

function  formsubmit(){
  var fn = document.forms["my-form"]["fname"].value;
   
  if(fn == ""){
   alert("you have to enter something");
   return false; 
  }
  else{
   alert("you entered your name is " +fn)
  }
}

const arrayquotes = [
  {
      'quote': 'Never Give Up',
  },
 
  {
      'quote': 'Hustle Loyalty Respect',
  },

  {
    'quote': 'Because of your smile, you make life more beautiful.',
},

{
  'quote': 'The greatest self is a peaceful smile, that always sees the world smiling back.',
},

{
  'quote': 'I love those who can smile in trouble.',
},
];


function genquote() {
  const random = Number.parseInt(Math.random() * arrayquotes.length);
  document.querySelector('#qt').textContent = `\"${arrayquotes[random].quote}\"`;
  
}

CALCULATOR

