/* Declare necessary variables */

var called = false;
var masonry_grid = null;
var masonry_interval = null;

/* This is the main function */

reactLoad = () => {

    /* Ensure the browser knows this function has been called once */

    called = true;

    /* Set the correct copyright year in the footer */

    $('#footerYear').html(new Date().getFullYear());

    /* Initialize UI components */

    $('.sidenav').sidenav();
    masonry_grid = $('.cards-container').masonry({ itemSelector: '.col', columnWidth: '.grid-sizer', percentPosition: true });
    document.addEventListener('lazybeforeunveil', (e) => { masonry_grid.masonry('layout'); });
    masonry_interval = setInterval(() => { masonry_grid.masonry('layout'); setTimeout(() => { clearInterval(masonry_interval); }, 16000); }, 2000);

}

window.onload = () => {

    if (!called) reactLoad();

}