$('button').on('click', function () {
    // Flip out the initial image
    $('.container').addClass('animate__flipOutY');

    setTimeout(function () {
        // Remove the flipOutY animation class
        $('.container').removeClass('animate__flipOutY');
        // Hide the initial image (set background to none)
        $('.container').css('background', 'none');

        // Set the background to the clown image and add animation classes for clown entry
        $('.container').css('background', "url('./clown-cute.gif') no-repeat");
        $('.container').append(`<div id="writing_container"><h1>חג פורים שמח גרוסמנים יקרים!</h1>
        <h2>אוהבים מאד, האלפרים :)</h2></div>`);
        $('.container').addClass('animate__animated animate__bounceInRight');

        // Make the h1 and h2 elements visible
        $('h1').css('visibility', 'visible');
        $('h2').css('visibility', 'visible');
    }, 1000); // Adjust the delay time (in milliseconds) as needed

    setTimeout(function () {
        // Redirect to a new location when the button is clicked again
        location.href = "https://benjyalper.github.io/grosman/"; // Replace "https://example.com" with your desired URL
    }, 5000); // Adjust the delay time (in milliseconds) as needed
});
