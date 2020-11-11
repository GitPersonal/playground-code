
// // ***************** Section 3 DOM Manipulation & Events *****************
// ********** #23 Examining The Document Object **********
// document gives us the entire document 
// let val;
// val = document;
// val = document.all; //properties
// val = document.all.length; //properties
// val = document.head; //properties
// val = document.body; //properties
// val = document.doctype; //properties
// val = document.domain; //properties
// val = document.URL; //properties
// val = document.characterSet; //properties
// val = document.contentType; //properties

// // Select stuff without using selectors. Not recommended to do it this way 
// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0].method;
// val = document.forms[0].action;

// val = document.links;
// val = document.links[0];
// val = document.links[0].id;
// val = document.links[0].className;
// val = document.links[0].classList;
// val = document.links[0].classList[0];

// val = document.images;

// val = document.scripts;
// val = document.scripts[2].getAttribute('src');

// let scripts = document.scripts;

// let scriptsArr = Array.from(scripts);

// scriptsArr.forEach(function(script) {
//     console.log(script);
// });


// console.log(val);

// *************************************************
// ********** #24 Creating elements **********
// *************************************************

// document.getElementById()

// console.log(document.getElementById('task-title')); //document.getElementById('task-title')

// // Get things from the element
// console.log(document.getElementById('task-title').id);  // task-title
// console.log(document.getElementById('task-title').className);  // task-title

// const taskTitle = document.getElementById('task-title') // Do this and not adding .id or .className
// // take the variable and place it where you need it  

// // Change Styling
// document.getElementById('task-title').style.background = '#333';
// document.getElementById('task-title').style.color = '#fff';
// document.getElementById('task-title').style.padding = '5px';

// // using the variable change style
// taskTitle.style.background = '#333';
// taskTitle.style.color = '#fff';
// taskTitle.style.padding = '5px';

// // Change content
// document.getElementById('task-title').textContent = 'Task List';
// document.getElementById('task-title').innerText = 'My Task';
// document.getElementById('task-title').innerHTML = '<span>Task List</span>';

// using the variable to change content
// taskTitle.textContent = 'Task List';
// taskTitle.innerText = 'My Task';
// taskTitle.innerHTML = '<span>Task List</span>';


// Using document.querySelector() 
// console.log(document.querySelector(''));

// console.log(document.querySelector('#task-title')); // id
// console.log(document.querySelector('.card-title')); // class
// console.log(document.querySelector('h5')); // element

// document.querySelector('li').style.color = 'red';

// *************************************************
// **** #25 DOM Selectors For Multiple Elements ****
// *************************************************

// const items = document.getElementsByClassName('collection-item');
// console.log(items);

// results 
// HTMLCollection(5) [li.collection-item, li.collection-item, li.collection-item, li.collection-item, li.collection-item]
// length: 5
// 0: li.collection-item
// 1: li.collection-item
// 2: li.collection-item
// 3: li.collection-item
// 4: li.collection-item
// __proto__: HTMLCollection


// console.log(items[0]);
// items[0].style.color = 'red';
// items[3].textContent = 'Hello';

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listItems);



// let lis = document.getElementsByTagName('li');
// console.log(lis);

// console.log(lis[0]);
// lis[0].style.color = 'red';
// lis[3].textContent = 'Hello';

// // Convert an HTML collection into an array 
// lis = Array.from(lis);

// lis.reverse(); //array method. reverse is not a function

// lis.forEach(function(li, index) {
//     console.log(li.className);
//     li.textContent = `${index}: Hello`;
// });
// console.log(lis);


// const listItems = document.querySelector('ul').getElementsByTagName('collection-item');
// console.log(listItems);


// const items = document.querySelectorAll('ul.collection li.collection-item');

// items.forEach(function(item, index){
//     item.textContent = `${index}: Hello`;
// });

// const liOdd = document.querySelectorAll('li:nth-child(odd)');
// const liEven = document.querySelectorAll('li:nth-child(even)');

// liOdd.forEach(function(item, index){
//     li.style.background = #ccc;
// });

// for(let i = 0, i < liEven.length, i++){
//     liEven[i].style.background = 'f4f4f4';
// }
// // for can be used with HTMLCollcetion 

// console.log(items);

// results 
// NodeList(5) [li.collection-item, li.collection-item, li.collection-item, li.collection-item, li.collection-item]
// length: 5
// 0: li.collection-item
// 1: li.collection-item
// 2: li.collection-item
// 3: li.collection-item
// 4: li.collection-item
// __proto__: NodeList









// *************************************************
// ********** #27 Creating elements **********
// *************************************************

// create element
// const li = document.createElement('li');

// Add class
// li.className = 'collection-item';

// Add id 
// li.id = 'new-item';

// Add attribute
// li.setAttribute('title', 'New Item');

// Create text node and append
// li.appendChild(document.createTextNode('New li'));

// or add text as a variable
// const helloWorld = 'Hello World';
// li.appendChild(document.createTextNode(helloWorld));

// Create new link element
// const link = document.createElement('a');

// Add classes
// link.className = 'delete-link secondary-content';

// add icon 
// link.innerHTML = '<i class="fa fa-remove"></i>';

// li.appendChild(link);

// //Append li as child to ul
// document.querySelector('ul.collection').appendChild(li);


// console.log(li);
