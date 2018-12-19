alert("Spotify detected.");

//myScript.js runs on only Spotify page so it should initiate the connect to background.js
/*
var port = chrome.runtime.connect({name: "keyboardPort"});
chrome.runtime.onConnect.addListener(function(port) {
    console.assert(port.name == "keyboardPort");
    port.onMessage.addListener(function(msg) {
        alert(msg);
    });
});

chrome.runtime.onDisconnect.addListener(function(port) {
    console.assert(port.name == "keyboardPort");
    port.disconnect();
});
*/

//bttns.getElementByTitle("Play").click();
var bttns = document.getElementsByClassName("player-controls__buttons")[0];


document.addEventListener('keydown', (event) => {
    const keyCode = event.keyCode;
    if (!event.repeat) {//don't want to spam nextsong, play/pause, previous, etc.
        if (keyCode == 178)
            alert("Stop button has no feature.");
        else if (keyCode == 177)
            bttns.getElementsByClassName("spoticon-skip-back-16")[0].click();
        else if (keyCode == 179)
            bttns.getElementsByClassName("control-button--circled")[0].click();
        else if (keyCode == 176)
            bttns.getElementsByClassName("spoticon-skip-forward-16")[0].click();
        else;
    }
}, false);