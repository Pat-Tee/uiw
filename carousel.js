var images = [
    "./img/slide-1.JPG",
    "./img/slide-2.JPG",
    "./img/slide-3.JPG" ];

var currentImg = 0;

function next() {
    var slider = document.getElementById('slide');
    currentImg++;

    if (currentImg >= images.length) currentImg = 0;
    slider.src=images[currentImg];
    console.log("next clicked");
    console.log("slider.src: "+slider.src);
}

function previous() {
    var slider = document.getElementById('slide');
    currentImg--;

    if (currentImg < 0) currentImg = images.length - 1;
    slider.src=images[currentImg];
    console.log("previous clicked");
    console.log("slider.src: "+slider.src);
}

setInterval(next, 4200);
/* from:
https://medium.com/nerd-for-tech/do-you-want-to-create-your-own-image-slider-with-javascript-c6bbb76bede8
*/
