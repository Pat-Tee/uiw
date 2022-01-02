const clickHandler = (e) => {

    const clickId = e.target.getAttribute("id");

    if (clickId == "uiwCard") return;
    if (clickId == "phone" || clickId == "email") return;
    e.preventDefault();

    if (clickId == prevId) return;

    if (clickId != "home") home = false;

    if (clickId == "home") {
        if (home) return;
        home = true;
        components.frameBox.className = "frame";
        components.card.className = "card";
        prevId = clickId;
        return;
    }

    const clickLink = e.target.getAttribute("href");

    components.frameContent.src = clickLink;
    components.frameBox.className= "frame frame-move";

    if (prevId == "home")
        components.card.classList.toggle("card-move");

    prevId = clickId;

}

const components = {
    card: document.getElementById("card"),
    frameBox: document.getElementById("frameBox"),
    frameContent: document.getElementById("frameContent")
};

components.card.addEventListener("click", clickHandler, false);
var home = true;
var prevId = "home";
