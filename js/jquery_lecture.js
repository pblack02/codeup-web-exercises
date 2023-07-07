$(function() {
    alert('The DOM is loaded.');
    // select a jquery id
    $('#id-container').css('background', 'red');

    // select jquery by class
    $('.title').css('color', 'purple');

    // same thing with js
    let titleElements = document.querySelectorAll('.title')
    titleElements.forEach(titleElements => {
        titleElements.style.color = 'blue';
    });
    // use jquery to select all 'li' element
    $('li').css('color', 'pink');

    // same thing with js
    let liElement = document.querySelectorAll('li')
    liElement.forEach(liElement => {
        liElement.style.color = 'lightgreen';
    });

    // using jquery multiple selectors
    $('h1, p, .highlight').css('font-weight', 'bold');

    // selection everything// you can chain things
    $('*').css('outline', '1px solid lightblue').css('font-weight', 'bold');














});