$('button').on('click', function () {
    $('.container').addClass('animate__flipOutY');
    setTimeout(function () {
        $('.container').removeClass('animate__flipOutY');
        $('.container').css('background-color', "blue");
        $('.container').css('background', "url('./clown-cute.gif') no-repeat center").addClass('animate__animated animate__bounceInRight');
        $('h1').css('visibility', 'visible');
    }, 1000); // Adjust the delay time (in milliseconds) as needed
});
