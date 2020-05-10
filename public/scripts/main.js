/* Declare necessary variables */

var called = false;

/* This is the main function */

reactLoad = () => {

    /* Ensure the browser knows this function has been called once */

    called = true;

    /* Register a service worker to enable offline access */

    //if ('serviceWorker' in navigator) { navigator.serviceWorker.register('sw.js'); }

    /* Set the correct copyright year in the footer */

    $('#footerYear').html(new Date().getFullYear());

    /* Initialize UI components */

    $('.parallax').parallax();
    $('.sidenav').sidenav();

}

window.onload = () => {

    if (!called) reactLoad();

}