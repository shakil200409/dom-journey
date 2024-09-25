// Step-1: Where to add
const placeList = document.getElementById('places-list');

// Step-2: What to add
const li = document.createElement('li');
li.innerText = 'Shalbon';

// Step-3: How to add
placeList.appendChild(li);



// Again

// 1. Where to add
const mainContainer = document.getElementById('main-container');


// 2. What to be added
const section = document.createElement('section');
const h1 = document.createElement('h1')
h1.innerText = 'My favourite food list';
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'Biriyani';
ul.appendChild(li1);
const li2 = document.createElement('li');
li2.innerText = 'Borhani';
ul.appendChild(li2);
const li3 = document.createElement('li');
li3.innerText = 'Coffee';
ul.appendChild(li3);


section.appendChild(ul);

// 3. Add to the parent
mainContainer.appendChild(section);


// Add with another way    with innerHTML
const sectionDress = document.createElement('section');

sectionDress.innerHTML = `
<h1>Dress I need to wear</h1>
<ul>
<li>T-shirt</li>
<li>Lungi</li>
<li>Shirt</li>
</ul>
`

mainContainer.appendChild(sectionDress);