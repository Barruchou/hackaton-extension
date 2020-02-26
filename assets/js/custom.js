var isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") > -1;

if (isFirefox) {
  browser.tabs.onCreated.addListener(function() {
    alert("On Firefox");
  });
  browser.browserAction.onClicked.addListener(function() {
    browser.tabs.create({ url: "./../template/index.html" }).then(
      function(tab) {
        console.log(tab.id);
      },
      function(error) {
        console.log(error);
      }
    );
  });
} else {
  chrome.tabs.onCreated.addListener(function() {
    alert("On Chrome");
  });
  chrome.browserAction.onClicked.addListener(function() {
    chrome.tabs.create({ url: "chrome://newtab" }, function(tab) {
      console.log(tab.id);
    });
  });
}
