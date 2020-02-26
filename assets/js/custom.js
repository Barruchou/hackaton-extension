var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

if (isFirefox) {
    browser.browserAction.onClicked.addListener(function () {

        alert("On Firefox");
        var creating = browser.tabs.create({
            url: "./../template/index.html"
        }); 
        creating.then(onCreated, onError);
    });
} else {
    chrome.browserAction.onClicked.addListener(function () {
        chrome.tabs.create({
            'url': "chrome://newtab"
        })
        alert("On Chrome");
    });
}