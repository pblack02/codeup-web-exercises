// Add a class to all dd elements named invisible.

// using jquery
// $('div dd').addClass('invisible');


// Create some CSS rules that sets elements with the invisible class to visibility: hidden;
// using jquery

// $('div .invisible').css('visibility', 'hidden');
// using js

// const chnageClass = document.querySelectorAll('.invisible');
// chnageClass.css = 'visibility', 'hidden';


// Update the page with jQuery to add a link that toggles the class invisible on and off for all dd elements ( only toggles with the fist class
// const classBox = document.querySelector('.invisible');
// const toggleClassButton = document.querySelector('#js-toggle-class-button');
//
// toggleClassButton.addEventListener('click', () => {
//     classBox.classList.toggleClass('invisible');
// });


// When any of the dt elements is clicked, the element that was clicked should be highlighted

// $('dt').on('click', () => {
//     $('dt').css({
//         backgroundColor: 'yellow'
//     });
// })

// Create a button that, when clicked, makes the last li in each ul have a yellow background.
    $('.btn').on('click', () => {
        $('ul').children().each((index, element) => {
            $('ul').children('li:last-child').css('background-color', 'yellow')
            });
        });



//     When any h3 is clicked, the lis underneath it should be bolded. Use font-weight: bold to achieve this.
$('h3').on('click', () => {
    $('h3').next().children('li').css('font-weight', 'bolder')
});



//     When any list item is clicked, first li of the parent ul should have a font color of blue.
$('li').on('click', () => {
    $('li').first().css('color', 'blue')
})

// $('li').on('click', () => {
//     $('li').closest('ul').css('color', 'blue')
// })