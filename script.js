$("#pause").hide();

$(document).ready(function () {

    const displayNewHello = () => {

        const helloArray = ["Hello", "こんにちは", "হ্যালো", "Привет", "ਸਤ ਸ੍ਰੀ ਅਕਾਲ"];

        const randomNumber = Math.floor(Math.random() * 5);

        $("#name-display").text(helloArray[randomNumber]);

    };

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