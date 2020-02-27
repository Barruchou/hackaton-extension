window.addEventListener("DOMContentLoaded", function(event) {
    getJSON("./../assets/json/data.json");
});

function getJSON(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
        useJSON(this.responseText)
    };
    xhr.open('GET', url, true);
    xhr.send();
}

function getSVG(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
        useSVG(this.responseText)
    };
    xhr.open('GET', url, true);
    xhr.send();
}

function useJSON(json) {
    var data = JSON.parse(json);
    console.log(data);
    var randomItem = getRandomItemFromArray(data);
    var fact = document.getElementById('fact');
    var tip = document.getElementById('tip');
    fact.innerText = randomItem["fact"];
    tip.innerText = randomItem["tip"];
    getSVG(randomItem["image"]);
}

function useSVG(svg) {
    var animation = document.getElementById('animation');
    animation.innerHTML = svg;
}

function getRandomItemFromArray(array){
    return array[Math.floor(Math.random() * array.length)];
}