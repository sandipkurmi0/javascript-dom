import "../assets/css/style.css";

// const app = document.getElementById("app");
// app.innerHTML = `
//   <h1>JavaScript DOM Sandip This is new work</h1>
// `;

// document.addEventListener("DOMContentLoaded", () =>
//   alert("Dom Content Loaded")
// );
// const app = document.getElementById("app");
// app.innerHTML = `
//   <h1>JavaScript DOM Sandip</h1>
// `;

// //Dom Nods
//HTML
// console.log(document.documentElement);
// console.log(document.documentElement);
// console.log(document.head);

// console.log(document.body instanceof HTMLBodyElement);
// console.log(document.body instanceof HTMLElement);
// console.log(document.body instanceof Element);
// console.log(document.body instanceof EventTarget);

// //give position of Html node type between 1 to 12
// console.log(document.body.nodeType);
// console.log(document.nodeType);

// //this will give only Html tag name
// console.log(document.body.tagName);
// console.log(document.head.tagName);
// console.log(document);

// const app = document.getElementById("app");
// const div = document.createElement("div");
// const text = document.createTextNode("Hello world");
// const comment = document.createComment("Learn Proply");

// div.append(text);
// div.append(comment);
// app.append(div);

// console.log(app, div);

//append Html element and text
// const app = document.getElementById("app");
// app.innerHTML = `
//   <h1>JavaScript DOM Sandip</h1>
// `;

// const h1 = document.createElement("h1");
// h1.innerText = "Learning js Dom";

// const h5 = document.createElement("h5");
// h5.innerText = "hello world";
// h5.innerText += ` it's sandip`;

// const h4 = document.createElement("h4");
// h4.innerHTML = "nice work";

// app.append(h1);
// app.append(h5);
// app.append(h4);

//give inner Html
// console.log(app);

// //git both similer result but innerText is more generic
// console.log(app.innerText);
// console.log(app.textContent);

//////////////////////////////////////////////////////////////
//By CreateElement
// const app = document.getElementById("app");

// function createInputDom({ lable, type = "text" }) {
//   const lableEl = document.createElement("lable");
//   const inputEl = document.createElement("input");

//   inputEl.type = type;
//   lableEl.innerText = lable;
//   lableEl.append(inputEl);

//   return lableEl;
// }

// const inputFromDom = createInputDom({ lable: "name" });
// console.log(inputFromDom.querySelector("input"));
// console.log(inputFromDom);
// app.append(inputFromDom);

// //by templeat litral
// function createInputTemlet({ lable, type = "text" }) {
//   return `
//   <lable>
//   ${lable}
//   <input type=${type} />
//   </lable>
//   `;
// }

// const inputFromTemplet = createInputTemlet({ lable: "email", type: "email" });
// const inputPasswordTemplet = createInputTemlet({
//   lable: "password",
//   type: "password",
// });

// app.innerHTML += inputFromTemplet;
// app.innerHTML += inputPasswordTemplet;

// console.log(app);

// //string Templet
// function createInputStringTemplet({ lable, type = "text" }) {
//   return `
//   <lable>
//   ${lable}
//   <input type=${type} />
//   </lable>

//   `;
// }

// //for password input
// const inputStringTemplet = createInputStringTemplet({
//   lable: "password",
//   type: "password",
// });

// //for radio button
// const inputStringRadio = createInputStringTemplet({
//   lable: "gender",
//   type: "radio",
// });

// const inputStringRadioMail = createInputStringTemplet({
//   lable: "mail",
//   type: "radio",
// });

// app.innerHTML += inputStringTemplet;
// app.innerHTML += inputStringRadio;
// app.innerHTML += inputStringRadioMail;

// console.log(app);

//////////////////////////////////////////////////////////////

//document fragement
// const app = document.getElementById("app");

// const food = ["pizza", "Burger", "sandwitch", "aluChat"];

//This aproch is not recamendad
// food.forEach((name) => {
//   const li = document.createElement("li");
//   li.innerText = name;
//   app.append(li);
// });

//we can use fragement This is very performent way

// const fragement = document.createDocumentFragment();

// food.forEach((name) => {
//   const li = document.createElement("li");
//   li.innerHTML = name;
//   fragement.append(li);
// });

// console.log(fragement);
// app.append(fragement);
// console.log(app);

/////////////////////////////////////////////////////

// const app = document.getElementById("app");
// app.innerHTML = `
//   <h1>JavaScript DOM Sandip</h1>
// `;

//Edeject dom element
// const div = document.createElement("div");
// const span = document.createElement("span");
// const p = document.createElement("p");
// const i = document.createElement("i");
// const b = document.createElement("b");

// div.append(span);
// div.prepend(p);
// p.after(i);
// span.after(i);
// span.before(b);

// console.log(div);
// console.log(span);

////////////////////////////////////////
//insert Dom as a string templet
// const app = document.getElementById("app");
// app.innerHTML = `
//   <h1>JavaScript DOM Sandip</h1>
//   <ul>
//   <li>786</li>
//   </ul>
// `;

// const ul = app.querySelector("ul");

// ul.insertAdjacentHTML("beforebegin", "<p>befour</p>");
// ul.insertAdjacentHTML("afterbegin", "<li>785</li>");
// ul.insertAdjacentHTML("beforeend", "<li>787</li>");
// ul.insertAdjacentHTML("afterend", "<p>after</p>");

/////////////////////////////////////////////////////
//updating node

// const app = document.getElementById("app");
// app.innerHTML = `
//   <h1>JavaScript DOM Sandip</h1>
//   <div>Replace me</div>
// `;

// const div = app.querySelector("div");
// const myDiv = document.createElement("div");

//new way of doing
// myDiv.innerText = "I Replace Div";
// div.replaceWith(myDiv);

//old way of doing

// const anotherDiv = document.createElement("div");
// anotherDiv.innerText = "I replace All";

// console.log(anotherDiv);
// setTimeout(() => {
//   myDiv.parentNode.replaceChild(anotherDiv, myDiv);
// }, 2000);

////////////////////////////////////////////////////////////
//cloning dom element

// const app = document.getElementById("app");
// app.innerHTML = `
//   <h1>JavaScript DOM Sandip</h1>
// `;

// const div = document.createElement("div");
// const span = document.createElement("span");
// span.innerHTML = "i am going to clone";

// div.append(span);

// app.append(div);
// console.log(app);

// //by default cloneNode(false)
// const cloneNode = div.cloneNode(true);
// const secondCloneNode = cloneNode.cloneNode(true);
// app.append(cloneNode);
// app.append(secondCloneNode);

// console.log(div);

//////////////////////////////////////////////////
//remove dom node

// const app = document.getElementById("app");
// app.innerHTML = `
//   <h1>JavaScript DOM Sandip</h1>
// `;

// const div = document.createElement("div");
// div.innerText = "i am Going to remove";

// app.append(div);

//new way of doing
// setTimeout(() => div.remove(), 2500);

//old way of doing
// setTimeout(() => div.parentNode.removeChild(div), 2500);
////////////////////////////////////////////////////

//query dom nodes

// const app = document.getElementById("app");
// app.innerHTML = `
//   <h1>JavaScript DOM Sandip</h1>
//   <ul id="list"></ul>
// `;
// const data = ["sandip", "akash", "vijay"];
// const fragement = document.createDocumentFragment();

// data.forEach((name) => {
//   const li = document.createElement("li");
//   li.className = "list-item";
//   li.innerHTML = name;
//   fragement.append(li);
// });

// //get element by id
// const userLi = document.getElementById("list");

// userLi.append(fragement);

// //get element by className
// const getUserListItemFromClassName = userLi.getElementsByClassName("list-item");
// console.log(getUserListItemFromClassName);

// //get element by tagname
// const getUserListItemFromTagName = userLi.getElementsByTagName("li");
// console.log(getUserListItemFromTagName);

// //new ul tag
// const newListItem = document.createElement("li");
// newListItem.innerText = "rakesh";
// newListItem.className = "list-item";

// const newListItem1 = document.createElement("li");
// newListItem1.innerHTML = "vikash";
// newListItem1.className = "list-item1";

// userLi.append(newListItem1);
// userLi.append(newListItem);

// //new Ul Tag
// const anotherItem = document.createElement("li");
// anotherItem.innerHTML = "Shiva";
// anotherItem.className = "my-list";
// userLi.append(anotherItem);

// setTimeout(() => anotherItem.remove(), 4000);
// setTimeout(() => newListItem1.remove(), 3000);
// setTimeout(() => newListItem.parentNode.removeChild(newListItem), 2000);

//////////////////////////////////////////////////////////////

//Query selector
// const app = document.getElementById("app");
// app.innerHTML = `
// <h1>Hello Sandip</h1>
// <ul id='list'></ul>
// `;

// const data = ["apDillon", "jsManak", "Badsha", "yoyohoneySing"];

// const fragement = document.createDocumentFragment();

// data.forEach((name) => {
//   const newList = document.createElement("li");
//   newList.innerText = name;
//   newList.className = "list-item";
//   fragement.append(newList);
// });

// const ListItemFromQuery = document.querySelector("#list");

// ListItemFromQuery.append(fragement);

// console.log(app);
// const myNewListItem = document.createElement("li");
// myNewListItem.innerText = "Harday sindhu";
// myNewListItem.className = "list-item";
// ListItemFromQuery.append(myNewListItem);

// const QuerySelectByClassName = document.querySelectorAll(".list-item");
// console.log(QuerySelectByClassName);

//////////////////////////////////////////////////////////////
//itrate dome element

// const app = document.getElementById("app");
// app.innerHTML = `
// <h1>JavaScript Dom</h1>
// <ul id='list'>
// <li>JavaScript</li>
// <li>Java</li>
// <li>react</li>
// <li>Anguler</li>
// </ul>
// `;

// const userProgramingLanguage = document.querySelectorAll("#list li");
// console.log(userProgramingLanguage);

// for (let i = 0; i < userProgramingLanguage.length; i++) {
//   console.log(userProgramingLanguage[i]);
// }

// for (const item in userProgramingLanguage) {
//   console.log(userProgramingLanguage[item]);
// }
// const newArray = [];

// [...userProgramingLanguage].forEach((item) => console.log(item));

// Array.from(userProgramingLanguage).forEach((item) => newArray.push(item));

// console.log("newArray");
// console.log(newArray);

//////////////////////////////////////////////////////////////

//get child node

// const app = document.getElementById("app");
// app.innerHTML = `
// <h1>Child Node</h1>
// <ul id="list">
// <li>Water</li>
// <li>Air</li>
// <li>Soil</li>
// <li>Food</li>
// </ul>
// `;

// const queryList = document.querySelector("#list");
// console.log(queryList);
// const list = queryList.querySelectorAll("li");
// const selectedItem = 2;
// console.log(list[selectedItem], list.length);

//more genricway of doing
// console.log(queryList.children[selectedItem], queryList.children.length);

//this is not aproprite way
// console.log(queryList.childNodes[selectedItem], queryList.childNodes.length);

///////////////////////////////////////////////////////////////////////////

// Perent node
// const app = document.getElementById("app");
// app.innerHTML = `
// <h1>Parent Node</h1>
// <div class='frist'></div>
// `;

// const fristItem = document.querySelector(".frist");

// console.log(fristItem);
// console.log(fristItem.parentNode);

// This is more generic way of doing in prentElement we can go up by chaining
// console.log(fristItem.parentElement.parentElement);

// this is also sorter form
// console.log(fristItem.closest("#app"));
// console.log(fristItem.closest("body"));

///////////////////////////////////////////////////////////////////////////
//siblings

// const app = document.getElementById("app");
// app.innerHTML = `
// <h1>Siblings</h1>
// <ul id='list'>
// <li>one</li>
// <li>Two</li>
// <li>three</li>
// <li>fout</li>
// </ul>
// <p>Hello</p>
// `;

// const list = document.querySelector("#list li");
// const userList = document.querySelector("#list");

// console.log(userList.nextElementSibling);
// console.log(userList.previousElementSibling);

//give any dom node like #text
// console.log(list.nextSibling);
// console.log(list.previousSibling);

//give any dom element
// console.log(list.nextElementSibling);
// console.log(list.previousElementSibling);

///////////////////////////////////////////////////////////////////
// diffrence between dom node and dom property
// const app = document.getElementById("app");
// app.innerHTML = `
// <h1>Siblings</h1>
// <input type="number" value="2" />
// `;

// const input = document.querySelector("input");
// // input.value = 2;
// console.log("2");
// console.log(parseInt(input.value, 10));
// input.autofocus = true;
// input.draggable = true;
// input.innerText = "hello";
// input.required = true;
// input.size = 2;
// console.log(input);
// console.dir(input);
// console.log(app);

//////////////////////////////////////////
//buttons

// const app = document.getElementById("app");
// app.innerHTML = `
// <h1>Siblings</h1>
// <button type='button'>Click Me</button>
// `;

// const button = document.querySelector("button");
// button.draggable = true;
// button.autofocus = true;
// //set
// button.setAttribute("aria-label", "Close this Modle");
// //get
// const value = button.getAttribute("aria-label");
// console.log(value);

// //attributes
// console.log(button.attributes["aria-label"]);

// console.dir(button);

// // Style Component
// button.style.cssText = "padding : 25px; margin: 10px 0; font-size: 20px;";

// button.style.fontSize = "22px";
// console.dir(button.style);
// console.log(button.style.fontSize);

//////////////////////////////////////////
// buttons ClassName

// const app = document.getElementById("app");
// app.innerHTML = `
// <h1>Siblings</h1>
// <button type='button' class="one two">Click Me</button>
// `;

// // old way of doing
// const button = document.querySelector("button");
// button.className += " three";

// // old way of doing
// console.log(button.className.split(" "));
// console.log(button.className);
// button.classList.add("four");

// // button.classList.remove("one");

// setTimeout(() => button.classList.toggle("five"), 2500);
// console.log(button.className);

// button.classList.replace("one", "six");
///////////////////////////////////////////////////////////////////////
// const app = document.getElementById("app");
// app.innerHTML = `
// <h1>Button</h1>
// <button type>Click Me</button>
// `;

// const button = document.querySelector("button");
// console.log(button);

// //old way of doing
// button.onclick = function () {
//   console.log(1);
// };

// function handleClick(event) {
//   console.log(event.target);
// }

// button.addEventListener("click", handleClick);

// button.addEventListener("dblclick", function (event) {
//   console.log(event, "doubleClicks");
// });

/////////////////////////////////////////////////////////////////////////
//clear/remove button event

// const app = document.getElementById("app");
// app.innerHTML = `
// <h1>remove Button Event</h1>
// <button type=button>Click me</button>
// `;

// const button = document.querySelector("button");

// achive by recurson
// function handleClick() {
//   console.log("click");
//   button.removeEventListener("click", handleClick);
// }

// button.addEventListener("click", handleClick);

// work after 5 second
// setTimeout(() => {
//   button.removeEventListener("click", handleClick);
// }, 5000);

// button.addEventListener(
//   "dblclick",
//   function () {
//     console.log("dblclick");
//   },
//   { once: true }
// );

////////////////////////////////////////////////////////////////////////
//event bubling
// const app = document.getElementById("app");
// app.innerHTML = `
// <h1>Event bubling</h1>
// <div class="one">
// <div class="two">
// <button type='button' class='three'>Click me</button>
// </div>
// </div>
// `;

// const one = document.querySelector(".one");
// const two = document.querySelector(".two");
// const three = document.querySelector(".three");

// function handleClick(event) {
//   //   event.stopPropagation();
//   //   event.stopImmediatePropagation();
//   console.log(event.target);
// }

// one.addEventListener("click", handleClick);
// two.addEventListener("click", handleClick);
// three.addEventListener("click", handleClick);

// three.addEventListener("click", (event) => console.log(event));

//////////////////////////////////////////////////////////////////////////////////
//prevent default event action
const app = document.getElementById("app");
app.innerHTML = `
<h1>Prevent default</h1>
<form action="">
<label>User Email
<input type="email" />
</label>
<label>i agree to the turm 
<input type="checkbox" />
</label>
</form>
`;

const form = document.querySelector("form");
const email = document.querySelector('input[type="email"]');
const checkbox = document.querySelector('input[type="checkbox"');

console.log(form);
console.log(email);
console.log(checkbox);

function handleSubmit(event) {
  console.log(event);
}

form.addEventListener("submit", handleSubmit);
