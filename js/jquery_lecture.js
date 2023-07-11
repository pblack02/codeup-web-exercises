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



    // can also make functions to change
    $('h2')
        .on('click', underlineThis)
        .on('dblclick', noUnderlinethis);



    // demonstrate .html getter
    $('ariticle.html').html();

    // demonstrate .html getter in js
    document.querySelector('article.html').innerHTML;

    // demonstrate .html as a setter
    $('article.html').hmtl(
        <h2>Something different</h2>
    )
// demonstrate .css as a getter - with one parameter it will look for that and give you back a value.
    $('article.css div').css('height');

    // demonstrate .css as a setter
    $('article.css div').css('property', 'value')

    // demonstrate .addclass
    $()
});