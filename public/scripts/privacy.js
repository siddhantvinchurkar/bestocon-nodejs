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
    $('.tooltipped').tooltip();
    $('.tap-target').tapTarget();
    M.TapTarget.getInstance(document.getElementById('patos-tt')).open();

}

window.onload = () => {

    if (!called) reactLoad();

}