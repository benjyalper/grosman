$('button').on('click', function () {
    $('.container').addClass('animate__flipOutY');
    setTimeout(function () {
        $('.container').removeClass('animate__flipOutY');
        $('.container').css('background', 'none'); // Set background to none to hide it
        $('.container').addClass('animate__animated animate__bounceInRight');
        $('h1').css('visibility', 'visible');
        // $('h1').append('<h2>אוהבים מאד, משפחת אלפר!</h2>');
    }, 1000); // Adjust the delay time (in milliseconds) as needed

    setTimeout(function () {
        // Redirect to a new location when the button is clicked again
        location.href = "https://benjyalper.github.io/grosman/"; // Replace "https://example.com" with your desired URL
    }, 5000); // Adjust the delay time (in milliseconds) as needed
});
