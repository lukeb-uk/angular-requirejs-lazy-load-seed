require.config({
    baseUrl: '/scripts',
    paths: {}
});

var app = {'lazy': angular.module('lazyOverride',[])};

require
(
    [
        'lib/appModule'
    ],
    function(app)
    {
        angular.bootstrap(document, ['lazyOverride','app']);
    }
);
