// Hide pause icon before page loads
$("#pause").hide();

$(document).ready(function () {

    // Display "Hello" in a random language & color
    const displayNewHello = () => {

        // Array containing hello
        const helloArray = ["Hello", "こんにちは", "হ্যালো", "Привет", "ਸਤ ਸ੍ਰੀ ਅਕਾਲ"];

        // Array containing colors 
        const colors = [
            // Red
            "#ff1654",
            //Green
            "#b2dbbf",
            // Pink
            "#ffcad4",
            // Red
            "#ff1654",
            // Yellow
            "#f3ffbd"
        ];

        // Generates randomnumber
        const randomNumber = Math.floor(Math.random() * 5);

        $("#greeting-display").text(helloArray[randomNumber]);
        $("#greeting-display").css('color', colors[randomNumber]);

    };

    // Run the previous function every second
    const interval = setInterval(displayNewHello, 1000);

    const music = $("#music");

    $("#play").on("click", () => {

        music[0].play();
        $("#play").hide();
        $("#pause").show();

    });

    $("#pause").on("click", () => {

        music[0].pause();
        $("#pause").hide();
        $("#play").show();

    })

});