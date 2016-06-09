requirejs.config({
    baseUrl: '.',
    paths: {
        jquery: 'components/jquery/dist/jquery',
        bootstrap: 'components/bootstrap/dist/js/bootstrap',
        control: 'javascripts/control',
        home: 'javascripts/home',
        about: 'javascripts/about',
        renewable: 'javascripts/renewables/renewable',
        renewablesByIndex: 'javascripts/renewables/renewablesByIndex',
        renewablesByYear: 'javascripts/renewables/renewablesByYear',
        energyOverview: 'javascripts/high-tech-energy/energyOverview',
        energyTypes: 'javascripts/high-tech-energy/energyTypes'
    }
});

requirejs(['jquery'], function($) {
    requirejs(['bootstrap', 'control'], function(bootstrap, control) {
        control.init();
    });
});