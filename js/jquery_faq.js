// Add a class to all dd elements named invisible.

// using jquery
// $('div dd').addClass('invisible');


// Create some CSS rules that sets elements with the invisible class to visibility: hidden;
// using jquery

$('div .invisible').css('visibility', 'hidden');
// using js

// const chnageClass = document.querySelectorAll('.invisible');
// chnageClass.css = 'visibility', 'hidden';


// Update the page with jQuery to add a link that toggles the class invisible on and off for all dd elements ( only toggles with the fist class
const classBox = document.querySelector('.invisible');
const toggleClassButton = document.querySelector('#js-toggle-class-button');

toggleClassButton.addEventListener('click', () => {
    classBox.classList.toggleClass('invisible');
});


// When any of the dt elements is clicked, the element that was clicked should be highlighted

$('dt').on('click', () => {
    $('dt').css({
        backgroundColor: 'yellow'
    });
})