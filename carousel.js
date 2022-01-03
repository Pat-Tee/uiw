var images = ["favicon.ico"];
var currentImg = 0;
// var slideCount = 0;
var loaded = false;
var url = window.location.href;

function UrlExists(url) {
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    if (http.status != 404)
        return true;
    else
        return false;
}

function loadSlides(slideCount=0) {

    console.log("loadSlides() called, slideCount: "+slideCount);
    var slider = document.getElementById('slide');

    if (loaded) return;

    if ( slideCount < 1) {
        console.log("slide slideCount not set");
        slider.src = images[0];
        return;
    }

    for (let i=1; i<=slideCount; i++ ) {
        let filename = "./img/slide-"+i+".jpg";
        if( UrlExists(filename) )
            images.push(filename);
        else {
            console.log(filename+" does not exist");
            console.log("slideCount stopped at "+ (i-1) );
            break;
        }
        console.log("images["+i+"]: "+ images[i]);
    }

    slider.src = images[1];
    currentImg = 1;
    loaded = true;
}

function next() {
    var slider = document.getElementById('slide');

    if (images.length > 1) currentImg++;
        if (currentImg >= images.length) currentImg = 1;
    slider.src=images[currentImg];
    console.log("next clicked");
    console.log("slider.src: "+slider.src);
}

function previous() {
    var slider = document.getElementById('slide');
    currentImg--;

    if (currentImg < 1) currentImg = images.length - 1;
    slider.src=images[currentImg];
    console.log("previous clicked");
    console.log("slider.src: "+slider.src);
}

const slideTimer = setInterval(next, 4200);

/* from:
https://medium.com/nerd-for-tech/do-you-want-to-create-your-own-image-slider-with-javascript-c6bbb76bede8
*/
