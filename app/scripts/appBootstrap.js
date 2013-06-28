require.config({
    baseUrl: '/scripts',
    paths: {}
});

var app = {'lazy': angular.module('lazyOverride',[])};

require
(
    [
        'appModule'
    ],
    function(app)
    {
        angular.bootstrap(document, ['lazyOverride','app']);
    }
);
