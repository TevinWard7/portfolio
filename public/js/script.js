// Hide pause icon before page loads
$("#pause").hide();

$(document).ready(() => {

    // Display "Hello" in a random language & color
    const displayNewHello = () => {

        // Array containing hello
        const helloArray = ["Hello", "こんにちは", "হ্যালো", "Привет", "ਸਤ ਸ੍ਰੀ ਅਕਾਲ"];

        // Array containing colors 
        const colors = [
            // Rosy brown
            "#C8B0A6",
            // Gainsboro
            "#E4DCE0",
            // Dark sea green
            "#AFB4A7",
            // Pale goldenrod
            "#E8CBB1"
        ];

        // Generates randomnumber
        const randomNumber = Math.floor(Math.random() * 5);

        $("#greeting-display").text(helloArray[randomNumber]);
        $("#greeting-display").css('color', colors[randomNumber]);

    };
    // Run the previous function every second
    let interval = setInterval(displayNewHello, 200);

    const helloAnimation = anime({
        targets: "#greeting-display",
        keyframes: [
            // { rotate: 360 },
            { translateY: 0 },
            { opacity: 1 },
            { borderRadius: ['0%', '50%'] },
            { scale: 2 },
            { opacity: 0 }
        ],
        duration: 500,
        easing: 'easeOutElastic(1, .8)',
        loop: true
    });

    // On Clicks
    $("#play").on("click", () => {

        const music = $("#music");
        music[0].play();
        $("#play").hide();
        $("#pause").show();

    });
    $("#pause").on("click", () => {

        const music = $("#music");
        music[0].pause();
        $("#pause").hide();
        $("#play").show();

    });

});