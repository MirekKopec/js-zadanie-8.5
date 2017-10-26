// scripts.js

// todo: why alert is loading before html content?

document.addEventListener("DOMContentLoaded", function() {

var title = document.getElementsByTagName('h1')[0].textContent;

var name = prompt('Enter your name');

if (name =='') {

name = 'Anonymus';

}

alert('Hello, ' + name);

var tekst = title + ', ' + name + '!';

document.getElementsByTagName('h1')[0].textContent = tekst;

function windowAlert() {
    var triangleArea;

    var a = prompt('Please enter base a:');

    var h = prompt('Please enter base h:');

if (a == '' || h == '') {

  alert('write correct numbers!');

} else {

  triangleArea = a*h/2;

  tekst = 'Triangle field with base a: ' + a + ' and height h: ' + h + ' is equal to: ' + triangleArea

  	console.log(tekst);

    document.getElementsByTagName('h1')[0].textContent = tekst;
}

}

document.getElementsByTagName('button')[0].addEventListener('click', windowAlert);

});
