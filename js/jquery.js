"use strict";

var global = {

    konami: function() {
        var konamikeys = [38,38,40,40,37,39,37,39,66,65],
            started = false,
            count = 0;

        $(document).keydown(function(e){
            var reset = function() {
                started = false;
                count = 0;
                return;
            };

            let key = e.keyCode;

            // Begin watching if first key in sequence was pressed.
            if(!started){
                if(key == 38){
                    started = true;
                }
            }

            // If we've started, pay attention to key presses, looking for right sequence.
            if (started){

                if (konamikeys[count] == key){
                    count++;
                } else {
                    // Incorrect key, restart.
                    reset();
                }
                if (count == 10){
                    // Success!
                    activeCheatsheet();
                    startConfetti();
                    reset();
                }
            } else {
                reset();
                stopConfetti();
            }
        });
    }
}
global.konami();

function activeCheatsheet(){
    document.body.style.backgroundColor = 'pink';
    document.body.style.color = 'red';
}