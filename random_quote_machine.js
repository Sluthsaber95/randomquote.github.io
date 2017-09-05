const quoteBox = document.getElementById("quote-box");
const recieveRequestBtn = document.getElementById("receive-request");

const jsonObject = [{
        "id": 1,
        "author": "Benjamin Franklin",
        "quote": "An investment in knowledge pays the best interest"
    },
    {
        "id": 2,
        "author": "Theodore Roosevelt",
        "quote": "Believe you can and you are half way there"
    },
    {
        "id": 3,
        "author": "George Washington",
        "quote": "We should not look back unless it is to derive useful lessons from past errors, and for the purpose of profiting by dearly bought experience"
    }
];


const randomElement = (arr) => {
    return Math.floor(Math.random() * arr.length);
}

const displayText = (node, json) => {
    let value = randomElement(json);
    let author = document.createTextNode(json[value].author);
    let text = document.createTextNode(json[value].quote);
    let paragraph = document.createElement("p")
    paragraph.setAttribute("id", "random-quote");

    if (!node.contains(document.getElementById("random-quote"))) {
        paragraph.appendChild(text);
        node.appendChild(paragraph);
    }
    document.getElementById("random-quote").textContent = json[value].quote;

}

const requestListener = () => {
    console.log(this.responseText);
}

const displayJSON = (node) => {
    const request = new XMLHttpRequest();
    request.addEventListener("load", requestListener);
    request.open("GET", "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=mycallback");
    request.send();
    node.innerHTML = this.responseText;
}

const AJAXcall = () => {

}


recieveRequestBtn.addEventListener("click", () => { displayJSON(quoteBox) });