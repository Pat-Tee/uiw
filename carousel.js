var images = ["favicon.ico"];   // default to favicon in case there are no slides in /img/
var currentImg = 0;
var url = window.location.href;
var slideTimerId = null;
var slideTimer = 3000;

function UrlExists(url) {   // Helper function to make http request to check if slide[i] exists
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    if (http.status != 404)
        return true;
    else
        return false;
}

function loadSlides(slideCount=0, timer=slideTimer) { // Will load all slides in /img/ directory that follow the naming convention of "slide-n.jpg" where n is a number greater than 0

    console.log("loadSlides() called, slideCount: "+slideCount);
    var slider = document.getElementById('slide');

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
    slideTimer = timer;
    toggleSlideshow();
}

function next() {   // Changes the slider to element src to the next image (i++)
    var slider = document.getElementById('slide');

    if (images.length > 1) currentImg++;
        if (currentImg >= images.length) currentImg = 1;
    slider.src=images[currentImg];
    console.log("next clicked");
    console.log("slider.src: "+slider.src);
    console.log("windows.location.href: "+url);
}

function previous() {   // Changes the slider to element src to the previous image (i--)
    var slider = document.getElementById('slide');
    currentImg--;

    if (currentImg < 1) currentImg = images.length - 1;
    slider.src=images[currentImg];
    console.log("previous clicked");
    console.log("slider.src: "+slider.src);
}

function toggleSlideshow() {    // simple toggle function that uses the global variables appropriately and sets the Javascript interval function to on or off
    if (slideTimerId == null) {
        slideTimerId = setInterval(next, slideTimer); 
        console.log("automatic playback started");
    } else {
        clearInterval(slideTimerId); 
        slideTimerId = null; 
        console.log("automatic playback halted");
    }
}

/* from:
https://medium.com/nerd-for-tech/do-you-want-to-create-your-own-image-slider-with-javascript-c6bbb76bede8
*/
