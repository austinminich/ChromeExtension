//Should listen for Song buttons to be pressed then send message to myScript.js to
//change song, pause, etc.

//This is an event page

var port = chrome.runtime.connect({name: "keyboardPort"});

//stopSong button keycode = 178
//previousSong button keycode = 177
//play-pauseSong button keycode = 179
//nextSong button keycode = 176
chrome.runtime.onConnect.addListener(function(port) {
    console.assert(port.name == "keyboardPort");
    myPort = port;//So that it can send message if it disconnects
    myPort.onMessage.addListener(function(msg) {
        //Do some based on the msg
    });
    myPort.onDisconnect(function(myPort) {
        assert(port.name == "keyboardPort");
        port.disconnect();
        myPort.disconnect();
    });
});