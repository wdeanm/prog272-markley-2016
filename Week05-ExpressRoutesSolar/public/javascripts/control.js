$(document).ready(function() { 'use strict';
    $ ('#getRenewable').click(getRenewables)
    function getrenewable() {
        console.log('getRenewable called')
        $.getJSON('/renewables', function (response) {
            console.log(response);
            $('#debug').html(JSON.stringify(response,null, 4));            
        })
    }
});

