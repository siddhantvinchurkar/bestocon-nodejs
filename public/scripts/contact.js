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
    $('input#contact_us_phone').characterCounter();
    document.getElementById('contact_us_phone').oninput = () => { if (document.getElementById('contact_us_phone').value.length >= document.getElementById('contact_us_phone').maxLength) document.getElementById('contact_us_phone').value = document.getElementById('contact_us_phone').value.slice(0, document.getElementById('contact_us_phone').maxLength); }

}

window.onload = () => {

    if (!called) reactLoad();

}