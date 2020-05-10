/* Declare necessary variables */

var called = false;

/* This is the main function */

reactLoad = () => {

    /* Ensure the browser knows this function has been called once */

    called = true;

    /* Set the correct copyright year in the footer */

    $('#footerYear').html(new Date().getFullYear());

    /* Initialize UI components */

    $('.sidenav').sidenav();

}

window.onload = () => {

    if (!called) reactLoad();

}