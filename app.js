function weatherDataFetch(city){
    var key = '77f97b598769bf8861004c74e30ebbba';
    fetch('https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}')
        .then(function(resp){
        return resp.json()
    }).then(function(data){
        console.log(data);
    }).catch(function (){
    });
}
function cityWeather(e){
    weatherDataFetch('Tallinn');
}