const clickHandler = (e) => {
    const clickId = e.target.getAttribute("id");
    // const sourceID = e.currentTarget.getAttribute("id");

    if (clickId == "phone" || clickId == "email") return;

    e.preventDefault();

    if (clickId == "uiwCard") return;
    if (clickId != "home") home = false;

    if (home && clickId == "home") return;

    if (clickId == "home") {
        home = true;
        components.frame.className = "frame";
        components.card.className = "card";
        components.frame.src = "";
        document.body.className = "background";
        return;
    }

    components.frame.src = e.target.getAttribute("href");
    components.frame.className = "frame frame-move";
    components.card.className = "card card-move";
    document.body.className = "background-move";
}

const components = {
    card: document.getElementById("card"),
    frame: document.getElementById("frame")
};

components.card.addEventListener("click", clickHandler, false);
console.log("comp card: "+ components.card);
var home = true;
