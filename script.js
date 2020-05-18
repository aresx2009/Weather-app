// http://api.openweathermap.org/data/2.5/weather?q=dallas&appid=c99414b93ced2946b80143c12aa16115
// var apiKey = "&appid=c99414b93ced2946b80143c12aa16115";

// var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=";

// var city = citiesArray[citiesArray.length - 1];

$(document).ready(function () {

    // cityArray = JSON.parse(localStorage.getItem("cities")) || [];
    // fiveDay(city);
    // chooseCity(city);

    chooseCity("Dallas");
    function chooseCity(city) {
        $("#user-weather").empty();
        $("#card1").empty();
        $("#card2").empty();
        $("#card3").empty();
        $("#card4").empty();
        $("#card5").empty();
        $("#input-weather").val("");

        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=c99414b93ced2946b80143c12aa16115",
            method: "GET"
        }).then(function (weatherResponse) {
            console.log(weatherResponse);

            $.ajax({
                url: "https://api.openweathermap.org/data/2.5/uvi/forecast?appid=c99414b93ced2946b80143c12aa16115&lat=" + weatherResponse.coord.lat + "&lon=" + weatherResponse.coord.lon + '&cnt=1',
                method: "GET"
            }).then(function (response) {
                console.log(response)
                var weatherBlock = $("<div id = 'weather-block'>")
                $("#user-weather").append(weatherBlock);

                var cityName = $("<h2>").text("City: " + weatherResponse.name);
                var date = $("<h3>").text("Date: " + moment().format('ddd, MM / DD / YY'));
                var TempK = weatherResponse.main.temp;
                var newTemp = ((TempK - 273.15) * 9 / 5 + 32).toFixed(2);
                var weatherIcon = $("<img src='http://openweathermap.org/img/wn/" + weatherResponse.weather[0].icon + "@2x.png'>");
                var cityTemp = $("<h5>").text("Temperature: " + newTemp);
                var cityHumidity = $("<h5>").text("Humidity: " + weatherResponse.main.humidity);
                var cityWindSpeed = $("<h5>").text("Wind Speed: " + weatherResponse.wind.speed);
                var cityUV = $("<h5 class='UV'>").text("UV Index: " + response[0].value);
                // $("#user-weather").append(cityUV);


                weatherBlock.append(cityName, date, weatherIcon, cityTemp, cityHumidity, cityWindSpeed, cityUV);
                var uvIndex = response[0].value
                if (uvIndex < 3) {
                    cityUV.css("background-color", "Green");
                } else if (uvIndex < 6) {
                    cityUV.css("background-color", "Yellow");
                } else if (uvIndex < 8) {
                    cityUV.css("background-color", "Orange");
                } else if (uvIndex < 11) {
                    cityUV.css("background-color", "Red");
                } else {
                    cityUV.css("background-color", "Purple");
                }

            });

            $.ajax({
                url: "https://api.openweathermap.org/data/2.5/onecall?lat=" + weatherResponse.coord.lat + "&lon=" + weatherResponse.coord.lon + "&appid=c99414b93ced2946b80143c12aa16115",
                // url: "https://api.openweathermap.org/data/2.5/onecall?lat=32.77&lon=-96.78&appid=c99414b93ced2946b80143c12aa16115",
                method: "GET"
            }).then(function (forecastResponse) {
                console.log(forecastResponse);
                // Card1
                var date1 = $("<h6>").text(moment.unix(forecastResponse.daily[1].dt));
                var icon1 = $("<img src='http://openweathermap.org/img/wn/" + forecastResponse.daily[1].weather[0].icon + "@2x.png'>");
                var T1 = forecastResponse.daily[1].temp.day;
                var newT1 = ((T1 - 273.15) * 9 / 5 + 32).toFixed(2);
                var temp1 = $("<h6>").text("Temperature: " + newT1);
                var H1 = $("<h6>").text("Humidity: " + forecastResponse.daily[1].humidity);

                $("#card1").append(date1, icon1, temp1, H1);
                // Card2
                var date2 = $("<h6>").text(moment.unix(forecastResponse.daily[2].dt));
                var icon2 = $("<img src='http://openweathermap.org/img/wn/" + forecastResponse.daily[2].weather[0].icon + "@2x.png'>");
                var T2 = forecastResponse.daily[2].temp.day;
                var newT2 = ((T2 - 273.15) * 9 / 5 + 32).toFixed(2);
                var temp2 = $("<h6>").text("Temperature: " + newT2);
                var H2 = $("<h6>").text("Humidity: " + forecastResponse.daily[2].humidity);

                $("#card2").append(date2, icon2, temp2, H2);
                // card3
                var date3 = $("<h6>").text(moment.unix(forecastResponse.daily[3].dt));
                var icon3 = $("<img src='http://openweathermap.org/img/wn/" + forecastResponse.daily[3].weather[0].icon + "@2x.png'>");
                var T3 = forecastResponse.daily[3].temp.day;
                var newT3 = ((T3 - 273.15) * 9 / 5 + 32).toFixed(2);
                var temp3 = $("<h6>").text("Temperature: " + newT3);
                var H3 = $("<h6>").text("Humidity: " + forecastResponse.daily[3].humidity);

                $("#card3").append(date3, icon3, temp3, H3);
                // card4
                var date4 = $("<h6>").text(moment.unix(forecastResponse.daily[4].dt));
                var icon4 = $("<img src='http://openweathermap.org/img/wn/" + forecastResponse.daily[4].weather[0].icon + "@2x.png'>");
                var T4 = forecastResponse.daily[4].temp.day;
                var newT4 = ((T4 - 273.15) * 9 / 5 + 32).toFixed(2);
                var temp4 = $("<h6>").text("Temperature: " + newT4);
                var H4 = $("<h6>").text("Humidity: " + forecastResponse.daily[4].humidity);

                $("#card4").append(date4, icon4, temp4, H4);
                // card5
                var date5 = $("<h6>").text(moment.unix(forecastResponse.daily[5].dt));
                var icon5 = $("<img src='http://openweathermap.org/img/wn/" + forecastResponse.daily[5].weather[0].icon + "@2x.png'>");
                var T5 = forecastResponse.daily[5].temp.day;
                var newT5 = ((T5 - 273.15) * 9 / 5 + 32).toFixed(2);
                var temp5 = $("<h6>").text("Temperature: " + newT5);
                var H5 = $("<h6>").text("Humidity: " + forecastResponse.daily[5].humidity);

                $("#card5").append(date5, icon5, temp5, H5);
            });
        });




        $("#search-city").on("submit", function (event) {
            var city = $("#input-weather").val();
            event.preventDefault()
            chooseCity(city);
        });
    };

});

// function renderButtons() {
//     $(".list-group").empty();

//     for (var i = 0; i < citiesArray.length; i++) {
//         var a = $("<li>");
//         a.addClass("cityName");
//         a.addClass("list-group-item");
//         a.attr("data-name", citiesArray[i]);
//         a.text(citiesArray[i]);
//         $(".list-group").append(a);
//     }

// }


// $("add-city").on("sunmit", function (event) {
//     event.preventDefault();
//     var city = $("input-weather").val().trim();
//     var containsCity = false;
//     if (citiesArray != null) {

//         $(citiesArray).each(function (x) {
//             if (citiesArray[x] === city) {
//                 containsCity = ture;
//             }
//         });
//         if (containsCity === false) {
//             citiesArray.push(city);
//         }
//         localStorage.setItem("cities", JSON.stringify(citiesArray));
//         fiveDay(city);
//         chooseCity(city);
//         renderButtons();
//     }
// });
// renderButtons();