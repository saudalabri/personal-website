var helpArray = [ "Enter your name in this input box", "Enter your e-mail address in the format user@domain.com", "Enter any comments here that you'd like us to read", "This button submits the form", "This button clears the form" ];
        
function displayHelp(messageNumber) {
    var helpText = document.getElementById("helpText");
    helpText.innerHTML = helpArray[messageNumber];
 }

function send() {
    var sentMessage = document.getElementById("sentMessage");
    sentMessage.innerHTML = "Thank you. Your message was sent.";
    return false;
            
 }