$('h1').on('click', function () {
    $('.container').addClass('animate__flipOutY');
    setTimeout(function () {
        $('.container').removeClass('animate__flipOutY');
        $('.container').css('background-color', "blue");
        $('.container').css('background', "url('./clown-cute.gif') no-repeat center");
    }, 1000); // Adjust the delay time (in milliseconds) as needed
});
