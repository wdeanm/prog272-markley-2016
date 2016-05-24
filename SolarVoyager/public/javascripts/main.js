requirejs.config({
    baseUrl: '.',
    paths: {
        jquery: 'components/jquery/dist/jquery',
        bootstrap: 'components/bootstrap/dist/js/bootstrap',
        control: 'javascripts/control',
        work: 'javascripts/work',
        about: 'javascripts/about',
        renewables: 'javascripts/renewables/renewables',
        renewablesByIndex: 'javascripts/renewables/renewables-index',
        renewablesBYYear: 'javascripts/renewables/renewables-year'
    }
});

requirejs(['jquery'], function($) {
    requirejs(['bootstrap', "control", 'work', 'about', 'funcObj'], function(bootstrap, control, work, about, funcObj) {
        control.init();
    });
});

/*


 */