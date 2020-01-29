// console.log("Tesiting DOM console");
// chrome.runtime.onMessage.addListener(gotMessage);

// function gotMessage(message, sender, sendResponse) {
//     console.log("Testing the function")
//     console.log(message.txt)
// if (message.txt === "dummy") {
//     let paragraph = document.getElementsByTagName('div');
//     for (elt of paragraph) {
//         elt.style['background-color'] = '#00ff00';
//     }
// }
// }
$(document).ready(function() {
    $("button").click(function() {
        var x = $("#iid").val();
        $("#did").html("<h2 class='heading'>" + x + " HIJACK" + "</h2>");
    });
});