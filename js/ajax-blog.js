(function() {
    "use strict";
    const tableBody = document.querySelector('#posts');

        $.ajax('data/blog.json').done(function(blogs) {
            console.log(blogs);
            for( let blog of blogs){
                let row = document.createElement('div');
                row.innerHTML = `
                <h3>${blog.title}</h3>
                <p>${blog.date}</p>
                <p>${blog.categories}</p>
                <p>${blog.content}</p>
                <hr>
            `;
                tableBody.appendChild(row);
            }
        })
})();