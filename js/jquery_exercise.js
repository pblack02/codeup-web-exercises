$(function() {
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
















});

