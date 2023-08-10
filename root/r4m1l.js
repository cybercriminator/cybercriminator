const round = (number, decimalPlaces) => {
    const factorOfTen = Math.pow(10, decimalPlaces)
    return Math.round(number * factorOfTen) / factorOfTen
}

var pageWidth = window.innerWidth;
var pageHeight = window.innerHeight;

if (pageHeight > pageWidth) {
    pageWidth = pageHeight;
} else {
    pageHeight = pageWidth;
}

var maxCopies = Math.round(pageWidth / 8);
var vignetteBlur = Math.round(pageWidth / 2);

var randomValue = randomInt(-15, 15);
var randomFloat = round(Math.random(), 1);

var transformers = document.querySelector('#transform');
var blurformers = document.querySelector('.vignette');

transformers.style.setProperty('--rotation', 'rotate('+randomValue+'deg)');
blurformers.style.setProperty('--vignetteBlur', vignetteBlur+'px');

var i;
var shadows = new Array('2px 2px 0px #8a0303');

for (i = 0; i < maxCopies; i++) {
    var randomX = randomInt(0 - pageWidth, pageWidth);
    var randomY = randomInt(0 - pageHeight, pageHeight);

    var red = randomInt(30, 137);
    var green = 0;
    var blue = 0;

    var blur = randomInt(0, 15);

    var opacity = randomInt(5, 10) / 10;

    shadows.push(randomX+'px '+randomY+'px '+blur+'px rgba('+red+', '+green+', '+blue+', '+opacity+')');
}

transformers.style.setProperty('--textShadow', shadows.join());

function randomInt(minimum, maximum) {
    minimum = Math.ceil(minimum);
    maximum = Math.floor(maximum);
    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}
