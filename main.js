//*-----------------------------  basic ------------------------------*//
//! console.dir(document); π check it's a document type
//? π ai document theke amra sob property te access korte parbo
//* jemon document.all/ document.URL/ document.title/ document.head/ document.body

//! console.log(typeof document); π check document type is object

document.title = "play with dom"; //? it will change the title
//*----------------------------  basic -------------------------------*//

//* -------------------πTraversing dom elementπ------------------- *//
//TODO: (1). ππ GET ELEMENT BY ID ππ

let header = document.getElementById("header");
header.innerHTML = "To-Do Apps"; //! π innerHTML eta element ta html akare return kore
header.textContent = "To-Do Apps"; //!π textContent element er maje joto text ache sob show korbe. jodi kono inner text css diye hide korao thake tao show korbe
header.innerText = "To-Do Appsss"; //!π innerText element er maje jei jei content pabe sei gula show korbe. jodi kono element css diye hide kora thake seta se pabe na!
//!π ai 3 way te amra element er value update korte pari

//TODO: (2). ππ GET ELEMENTS BY CLASS NAME ππ
let itemUl = document.getElementById("items");
let items = itemUl.getElementsByClassName("item"); //!π class same name multiple thakte pare tai eta elements of item return kore
for (let i = 0; i < items.length; i++) {
  items[i].style.color = "red";
}

//TODO: (3). ππ GET ELEMENTS BY TAG NAME ππ
//* Tag hocce jei element gula <></> ai syntax diye thake sei gulai tag. jemon <div/> <ul></ul> <li></li>

let tag = document.getElementsByTagName("li"); //!π etao elements of item return kore
for (let i = 0; i < tag.length; i++) {
  tag[i].style.color = "blue";
}

//TODO: (4). ππ QUERY SELECTOR ππ
//* CSS selector pass kore amra jodi element khuje ber korte chai tokhon eta use korbo

//* two way te element select kora jai
//? 1. document.querySelector() π eta single element select kore
//? 2. document.querySelectorAll() π eta multiple element select kore

// let item = document.querySelector('#item'); eta diye id dhorci
let item = document.querySelector(".item");
//!π query selector diye kicu select korle seta by default first element return kore multiple thakleo
item.style.color = "green";

let lastItem = document.querySelector(".item:last-child");
lastItem.style.color = "orange";

//* query selector diye multiple element dhorte chaile use korte hobe document.querySelectorAll
let oddItem = document.querySelectorAll(".item:nth-child(odd)"); //! query selector asole css selector nei
for (let i = 0; i < oddItem.length; i++) {
  oddItem[i].style.fontSize = "20px";
  oddItem[i].style.fontWeight = "bold";
}

//* -------------------πTraversing dom elementπ------------------- *//

//* -------------------πparent/child relationπ------------------- *//

//? grandparent to child select korar way
// const grandparent = document.querySelector(".todo-list");
// const parent = grandparent.children; //!π eta diye amra children gula pabao
// const child = parent[1].children;
// console.log("child -- ", child);

//? parent to child select korar way
// const parent = document.querySelector("#items");
// const child = parent.children; //!π eta diye amra children gula pabao
// console.log("child -- ", child);

//? grand parent to direct children
// const grandparent = document.querySelector(".todo-list");
// const child = grandparent.querySelectorAll(".item");
// console.log("child -- ", child);

//? child to parent
const child = document.querySelector(".item");
const parent = child.parentElement; //1 way
const grandparent = child.closest(".todo-list"); //2 way eta nich theke uporer dike check korte korte element ta khuje
console.log("parent -- ", grandparent);

//* -------------------πparent/child relationπ------------------- *//

//* ----------------------πdom manipulationπ------------------- *//

//? Create an element
const divElement = document.createElement("div");
divElement.className = "myDiv"; //!add class 1st way

divElement.setAttribute("id", "red"); //! id set korlam
divElement.setAttribute("title", "red div");
// divElement.setAttribute("class", "red div"); //! add class 2nd way

//!π dom a insert korar way
const container = document.querySelector(".todo-list");
const h2 = document.querySelector("h2"); //!π h2 element er agge insert korbo
container.insertBefore(divElement, h2); //?ππ aita 2ta element nei, 1st er ta jeta insert korbo seta, 2nd ta jar age insert korbo seta
//!π container mane todo-list er maje akta new div insert korlam
divElement.innerHTML = "ami new div";
divElement.style.color = "red";
divElement.style.display = "flex";
divElement.style.justifyContent = "center";

//? dom a sobar last a insert korar way
container.appendChild(divElement); //!1st way
// container.append(divElement); //!2nd way

//? append vs appendChild
//!π append er maje amra j kono kicu dite pari but appendChild er maje html element e dite hobe
// container.append('hello world'); -- ok
//container.appendChild('hell world'); -- throw error karon eta shudu html element nei
//*container.append(divElement, 'hello world, document.createElement('p')); // eto kicu ek shate add kora jai

//* ----------------------πdom manipulationπ------------------- *//

//* ----------------------πdom events listenerπ------------------- *//

const input = document.querySelector('input[type="text"]');
input.addEventListener("keyup", (e) => {
  e.preventDefault();
  console.log("input -- ", e.target.value);
});

//TODO: https://www.w3schools.com/jsref/dom_obj_event.asp

//* ----------------------πdom events listenerπ------------------- *//

console.dir(header); //! πππ eta dilei ai element er sob property/function dekha jabe

/*
innerHTML: "To-Do Appsss" //!πππ
innerText: "TO-DO APPSSS" //!πππ
inputMode: ""
isConnected: true
isContentEditable: false
lang: ""
lastChild: text
lastElementChild: null
localName: "h1"
namespaceURI: "http://www.w3.org/1999/xhtml"
nextElementSibling: form.new-task-container.box
nextSibling: text
nodeName: "H1"
nodeType: 1
nodeValue: null
nonce: ""
offsetHeight: 27
offsetLeft: 250
offsetParent: body
offsetTop: 378
offsetWidth: 170
onabort: null
onanimationend: null
onanimationiteration: null
onanimationstart: null
onauxclick: null
onbeforecopy: null
onbeforecut: null
onbeforepaste: null
onbeforexrselect: null
onblur: null //!π
oncancel: null //!π
oncanplay: null
oncanplaythrough: null
onchange: null //!πππ
onclick: null //!πππ
onclose: null //!π
oncontextmenu: null
oncopy: null //!π
oncuechange: null
oncut: null
ondblclick: null //!ππ
ondrag: null //!π
ondragend: null //!π
ondragenter: null
ondragleave: null
ondragover: null
ondragstart: null
ondrop: null
ondurationchange: null
onemptied: null
onended: null
onerror: null
onfocus: null //!ππ
onformdata: null
onfullscreenchange: null
onfullscreenerror: null
ongotpointercapture: null
oninput: null
oninvalid: null
onkeydown: null //!ππ
onkeypress: null //!πππ
onkeyup: null //!πππ
onload: null //!ππ
onloadeddata: null
onloadedmetadata: null
onloadstart: null
onlostpointercapture: null
onmousedown: null //!ππ
onmouseenter: null //!ππ
onmouseleave: null //!ππ
onmousemove: null //!ππ
onmouseout: null //!π
onmouseover: null //!π
onmouseup: null
onmousewheel: null
onpaste: null
onpause: null
onplay: null
onplaying: null
onpointercancel: null
onpointerdown: null
onpointerenter: null
onpointerleave: null
onpointermove: null
onpointerout: null
onpointerover: null
onpointerrawupdate: null
onpointerup: null
onprogress: null
onratechange: null
onreset: null
onresize: null
onscroll: null //!π
onsearch: null //!π
onseeked: null
onseeking: null
onselect: null
onselectionchange: null
onselectstart: null
onstalled: null
onsubmit: null
onsuspend: null
ontimeupdate: null
ontoggle: null
ontransitioncancel: null
ontransitionend: null
ontransitionrun: null
ontransitionstart: null
onvolumechange: null
onwaiting: null
onwebkitanimationend: null
onwebkitanimationiteration: null
onwebkitanimationstart: null
onwebkitfullscreenchange: null
onwebkitfullscreenerror: null
onwebkittransitionend: null
onwheel: null
outerHTML: "<h1 id=\"header\" class=\"header\">To-Do Appsss</h1>"
outerText: "TO-DO APPSSS" //!π
ownerDocument: document
parentElement: section.dom
parentNode: section.dom
part: DOMTokenList [value: ""]
prefix: null
previousElementSibling: div
previousSibling: text
scrollHeight: 27 //!π
scrollLeft: 0 //!π
scrollTop: 0 //!π
scrollWidth: 170 //!π
shadowRoot: null
slot: ""
spellcheck: true
style: CSSStyleDeclaration {alignContent: "", alignItems: "", alignSelf: "", alignmentBaseline: "", all: "", β¦}
tabIndex: -1
tagName: "H1"
textContent: "To-Do Appsss"
title: ""
*/
