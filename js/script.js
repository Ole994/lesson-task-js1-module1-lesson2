// DOM AKA DOCUMENT OBJECT MODEL

//Core DOM - standard model for all document types
//XML DOM - standard model for XML documents
//HTML DOM - standard model for HTML documents

// The HTML elements as objects
// The properties of all HTML elements
// The methods to access all HTML elements
// The events for all HTML elements
//Characters that are not part of standard CSS syntax must be escaped using a backslash character.

// Question 1
// Select the h3 element and change its value to Hello instead of Welcome.

const firstHeading = document.querySelector ("h3")
firstHeading.innerHTML = "hello";

// Question 2
// Select all the h4 elements on the page and change their margin-bottom style to -20px.
let allH4Elements = document.querySelector ("h4")
allH4Elements.style.marginBottom ="-20px";

// Question 3
// Set the background colour of the second h4 element to red.
const secound4Element = document.querySelector("h4.two");
secound4Element.style.backgroundColor = "red";


// Question 4
// Set the font size of the first paragraph element on the page to 24px and its color to blue.
const secoundParagraph = document.querySelector("p.one");
secoundParagraph.style.fontSize = "24px";
secoundParagraph.style.color = "blue";

// Question 5
// Add span tags around the content of the third paragraph element on the page.
const thirdParagraph = document.querySelectorAll("p.three");
thirdParagraph.innerHTML = "<span>" + thirdParagraph.innerHTML + "<span/>";



// Question 6
// Add a new paragraph to the div with a class of content. Add the paragraph after the others.
let content = document.querySelector (".content");
content.innerHTML += "<p>new paragraph</p>";
// Question 7
// Add a new class called content-item to each paragraph in the div with a class of content.
const contentParagraphs = document.querySelectorAll(".content p");


for(let i = 0; i < contentParagraphs.length; i++) {
    contentParagraphs[i].classList.add("content-item");
}

// Question 8
// Select the ul element on the page by its id and add a new list item to the beginning of the list.
const list = document.querySelector ("#services");
list.innerHTML = "<li> New item </li>" + list.innerHTML;


// Question 9
// Programmatically remove the class from the ul element.
list.classList.remove ("serviceList");

// Question 10
// Hide the element with the id of hide.
const hideMe = document.querySelector ("#hide");
hideMe.style.display = "none"