const clickHandler = (e) => {

    const clickId = e.target.getAttribute("id");    // Get id of element where click or tap occurred

    if (clickId == "uiwCard") return;               // uiwCard is the card itself, so do nothing
    if (clickId == "phone" || clickId == "email") return;   // phone(tel:) and email(mailto:) tags are handled by the browser, so do nothing
    e.preventDefault(); 

    if (clickId == prevId) return;  // prevId stores the last clickevent Id so that if we are already there, do nothing

    if (clickId != "home") home = false;    // if clickevent target Id is not home, track that condition home boolean

    if (clickId == "home") {    // if clickevent target Id is home
        if (home) return;       // and we are already home, do nothing
        home = true;            // else home boolean is updated accordingly
        components.frameBox.className = "frame";    //
        components.card.className = "card";         // reset elements' css to start condition
        setTimeout(function() { components.frameContent.src = ""; }, 2000);   // Reset the frame src so that the slideshow doesn't keep running in the background
        prevId = clickId;   // store clickevent Id to track previous
        return;
    }

    const clickLink = e.target.getAttribute("href");    // if we've gotten this far, the clickEvent Id is for an html link

    components.frameContent.src = clickLink;
    components.frameBox.className= "frame frame-move";  // triggers the css animation to make the frame visible

    if (prevId == "home")   // if we were home, and now an html link has been clicked
        components.card.classList.toggle("card-move"); // triggers the css animation to move the card

    prevId = clickId;   // update previous Id tracker
}

const components = {    // This object stores the Ids for the 3 main elements that compose the site
    card: document.getElementById("card"),
    frameBox: document.getElementById("frameBox"),
    frameContent: document.getElementById("frameContent")
};

components.card.addEventListener("click", clickHandler, false);
var home = true;
var prevId = "home";
