const express = require("express");
const https = require("https");
// const bodyParser = require("body-parser");
const app = express();

app.use(express.urlencoded({
    extended: true
}));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});


app.post("/", function (req, res) {
    const query = req.body.cityName;
    const apiKey = "75f528944f74b7555c382dbb611c80f5";
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + unit;

    https.get(url, function (response) {
        console.log(response.statusCode);

        response.on("data", function (data) {
            const weatherData = JSON.parse(data);
            const weatherTemp = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            const weatherIcon = weatherData.weather[0].icon;
            const imageUrl = "http://openweathermap.org/img/wn/" + weatherIcon + "@2x.png"

            res.write("<h1>The weather is currently " + weatherDescription + ".</h1>");
            res.write("<h1>The temperature in " + query + " is " + weatherTemp + ".</h1>");
            res.write("<img src =" + imageUrl + " >")
            res.send();
        });

    });

});




app.listen(3000, function () {
    console.log("Server is running on port 3000");
});



// const url = "https://api.openweathermap.org/data/2.5/weather?q=Montreal&appid=75f528944f74b7555c382dbb611c80f5&units=metric"


// response.on(url, function (response) {
//     const weatherData = JSON.parse(data);
//     const weatherTemp = weatherData.main.temp;
//     const weatherDescription = weatherData.weather[0].description;
//     const icon = weatherData.weather[0].icon;
//     const imageUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

//     res.write("<p>The weather is currently " + weatherDescription + ".</p>");
//     res.write("<h1>The temperature in Montreal is " + weatherTemp + ".</h1>");
//     res.write("<img src =" + imageUrl + " >");
//     res.send();
// });