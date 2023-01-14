// FROM THE GUY AT FREECODECAMP THAT TALKS TOO FAST 
// DOM Manipulation
// GetElementByID()
// const title = document.getElementById('main-heading');
// console.log(title)
//GetElementByClassName()
// const listItem = document.getElementsByClassName('list-items')
// console.log(listItem);
// GetElementsByTagName()
// const listItem = document.getElementsByTagName('li');
// console.log(listItem);
// // querySelector()
// const container = document. querySelector('div');
// console.log(container);

// FROM BEAU

let div1 = document.getElementById('div1');

let unicycle = document.getElementsByClassName('unicycle');

let paragraphs = document.getElementsByTagName('p')

let queryUnicycle = document.querySelector('#div2');

let querryAll = document.querySelectorAll('.unicycle, #div2');

//console.log(queryUnicycle);

let text = "Hello World";

queryUnicycle.textContent = text;

console.log(querryAll)









