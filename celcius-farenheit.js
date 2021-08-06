// Convert the temperature from Celcius to Farenheit

function farenheit(celcius) {

    var farenheitTemperature = (celcius * 1.8) + 32;
    return farenheitTemperature;

}

var c = 38;
var f = farenheit(c);
console.log(f);
