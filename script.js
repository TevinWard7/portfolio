// Hide pause icon before page loads
$("#pause").hide();

$(document).ready(function () {

    // Display "Hello" in a random language & color
    const displayNewHello = () => {

        // Array containing hello
        const helloArray = ["Hello", "こんにちは", "হ্যালো", "Привет", "ਸਤ ਸ੍ਰੀ ਅਕਾਲ"];

        // Array containing colors 
        const colors = [
            "#ff0000", "#00ff00", "#ffcad4",
            "#ff3333", "#ffff00"
        ];

        // Generates randomnumber
        const randomNumber = Math.floor(Math.random() * 5);

        $("#name-display").text(helloArray[randomNumber]);
        $("#name-display").css('color', colors[randomNumber]);

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