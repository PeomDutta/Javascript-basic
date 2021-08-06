// Convert the temperature from Farenheit to Celcius

function celcius(farenheit) {

    var celciusTemperature = (5 / 9) * (farenheit - 32);
    return celciusTemperature;

}

var f = 102.2;
var c = celcius(f);
console.log(c);

