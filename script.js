
function updateTagByID(id, content) {
    const updateHTML = document.getElementById(id);
    updateHTML.innerHTML = content;
}

function updateTagByClass(className, content) {
    const updateHTML = document.getElementsByClassName(className)[0];
    updateHTML.innerHTML = content;
}

function updateTag(tagName, content) {
    const updateHTML = document.getElementsByTagName(tagName)[0];
    updateHTML.innerHTML = content;
}


function querySelect(tag, content) {
    const obj = document.querySelector(tag);
    obj.textContent = content;
}

function putStyle(id, color) {
    const obj = document.getElementById(id).style.color = color;
}

function animation() {
    const obj = document.getElementById("animator");
    let pos = 0;
    let inter = setInterval(() => {
        if (pos == 1250) {
            clearInterval(inter);
        } else {
            pos++;
            // console.log(pos)
            obj.style.left = pos + "px";
            // obj.style.top = pos + "px";
        }
    }, 5);
}

// parentNode childNodes firstChild lastChild nextSibling previousSibling
console.log(document.getElementById("container").parentNode)
console.log(document.getElementById("container").childNodes)
console.log(document.getElementById("container").firstChild)
console.log(document.getElementById("container").lastElementChild.innerHTML)
console.log(document.getElementById("container").previousElementSibling.innerHTML)
console.log(document.getElementById("container").nextSibling)

const para = document.createElement("p");
let node = document.createTextNode("This is a paragraph");

para.appendChild(node);

let element = document.getElementById("container");
element.appendChild(para);

// animate();
putStyle("title", "red");
updateTag("article", "This is an article");
updateTagByID("title", "Telugunet.in");
updateTagByClass("intro", "This is intro paragraph")
setTimeout(() => {
    querySelect("#title", "Telugunet.com");
}, 5000);

// Remove a node directly
document.getElementById("remove").remove(
    // The remove() method does not work in older browsers, see the example below on how to use removeChild() instead.
)

// Removing child node
parent = document.getElementById("container")
child = document.getElementById("container").firstElementChild

parent.removeChild(child)

// Replacing html elements
element = document.createElement("h2");
node = document.createTextNode("This is h2");

element.appendChild(node)

const replaceParent = document.getElementById("replaceParent");
console.log(replaceParent)
const replace = document.getElementById("replace");
replaceParent.replaceChild(element, replace);

// title
document.title = "telugunet.in";
document.write("Hello world! Today's date ", Date());