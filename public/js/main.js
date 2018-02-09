// APP
var buscapeApp = angular.module('buscapeApp', ['ngRoute']);

(function () {
    'use strict';

    angular
        .module('buscapeApp')
        .directive('imagem404', imagem404);

    imagem404.$inject = ['$window'];

    function imagem404($window) {
        //Retorna a imagem padrão de perfil caso não seja encontrado a imagem definica na tag SRC
        var directive = {
            link: link,
            scope: {
                objeto: "="
            }
        };
        return directive;

        function link(scope, element, attrs) {
            scope.$watch(function () {
                return attrs['ngSrc'];
            }, function (value) {
                if (!value) {
                    if (element.attr('imagem404') == 'objeto')
                        element.attr('src', 'public/images/logo.png');
                    else
                        element.attr('src', 'public/images/menu.png');
                }
            });
            element.bind('error', function () {
                element.attr('src', 'public/images/logo.png');
            });
        }
    }

})();


 // Rotas simples
//  buscapeApp.config(function($routeProvider) {
//     $routeProvider

//         // route for the home page
//         .when('/', {
//             templateUrl : 'pages/home.html',
//             controller  : 'mainController'
//         })

//         // route for the about page
//         .when('/about', {
//             templateUrl : 'pages/about.html',
//             controller  : 'aboutController'
//         })

//         // route for the contact page
//         .when('/contact', {
//             templateUrl : 'pages/contact.html',
//             controller  : 'contactController'
//         });
// });

// create the controller and inject Angular's $scope
buscapeApp.controller('mainController', function($scope, $http) {
    var vm = this;
    vm.produtos = [];

    $http.get("/js/data.json")
        .then(function(response) {
            console.log(response);
            vm.produtos = response.data.items;
        });
});
