$(function() {

    // Add jQuery code that will change the background color of an h1 element when clicked.
    $('h1').click(
        function() {
            $(this).css('background-color', 'blue');
        })

    // Make all paragraphs have a font size of 18px when they are double clicked.
    $('p').dblclick(
        function() {
            $(this).css('font-size', '18px');
        })
    // Set all li text color to red when the mouse is hovering; reset to black when it is not
    $('li').hover(
        function() {
            $(this).css('color', 'red');
        },
        function() {
            $(this).css('color', 'black');
        }





    // select a jquery id
    let contents = $('#paragraph1').html();
    alert(contents);

    let paragraph2 = $('#paragraph2').html();
    alert(paragraph2);

    // select jquery by class
    $('.codeup').css('border', '1px solid red');

    // use jquery to select all 'li' element
    $('li').css('font-size', '20px');

    let content = $('h1').html();
    alert(content);

    // using jquery multiple selectors
    $('h1, p, li').css('background', 'yellow');

    // selection everything
    $('*').css('font-weight', 'bold');
    );
















});

