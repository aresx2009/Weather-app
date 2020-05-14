// var time = moment().format("H");
// var window.moment = moment
// console.log(m.format("dddd"))
// http://api.openweathermap.org/data/2.5/weather?q=dallas&appid=c99414b93ced2946b80143c12aa16115
// var apiKey = "&appid=c99414b93ced2946b80143c12aa16115";
// const m = moment();

// var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=";

// cityArray = JSON.parse(localStorage.getitem("city")) || [];
$(document).ready(function () {
    chooseCity();
    function chooseCity(city) {
        $("#user-weather").empty();
        $("#input-weather").val("");
        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=c99414b93ced2946b80143c12aa16115",
            method: "GET"
        }).then(function (weatherResponse) {
            var weatherBlock = $("<div id = 'weather-block'>")
            $("#user-weather").append(weatherBlock);

            var cityname = $("<h2>").text("City: " + weatherResponse.name);
            // var currentDate = ("<h5>").unix(response.dt).format("L");
            // console.log("current date" + currentDate);
            var date = Response.dt;
            Console.log(date);
            // var citydate = $("<p>").text(moment.unix(date).format("L"))
            // console.log("current date" + currentDate);
            var TempK = weatherResponse.main.temp;
            var newTemp = ((TempK - 273.15) * 9 / 5 + 32).toFixed(2)
            var weathericon = $("<img src='http://openweathermap.org/img/wn/" + weatherResponse.weather[0].icon + "@2x.png'>");
            var citytemp = $("<h5>").text("Temperature: " + newTemp);
            var cityhumidity = $("<h5>").text("Humidity: " + weatherResponse.main.humidity);
            var citywindspeed = $("<h5>").text("Wind Speed: " + weatherResponse.wind.speed);

            // var lon = Response.coord.lon;
            // var lat = Response.coord.lat;
            // uvIndex(lat, lon)

            weatherBlock.append(cityname, weathericon, citytemp, cityhumidity, citywindspeed);
            console.log(weatherResponse);
        })
    }

    // function uvIndex(lat, lon) {
    // var indexURL = "http://api.openweathermap.org/data/2.5/uvi/forecast?appid=c99414b93ced2946b80143c12aa16115&lat=" + lat + "&lon=" + lon + '&cnt=1',
    // $.ajax({
    // url: "http://api.openweathermap.org/data/2.5/uvi/forecast?appid=c99414b93ced2946b80143c12aa16115&lat=" + lat + "&lon=" + lon + '&cnt=1',
    // method: "GET"
    // }).then(function (response) {
    // var cityUV = $("<h5>").text("UV Index: " + response.value)
    // var weatherBlock2 = $("<div id = 'weather-block2'>")
    // $("#user-weather").append(weatherBlock2);
    // weatherBlock2.append(cityUV)
    // console.log(response)
    // })
    // }

    $("#search-city").on("submit", function (event) {
        var city = $("#input-weather").val();
        event.preventDefault()
        chooseCity(city);
    })

})
