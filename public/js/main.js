// APP
var buscapeApp = angular.module('buscapeApp', ['ngRoute']);

(function () {
    'use strict';

    angular
        .module('buscapeApp')
        .directive('imagem404', imagem404);

    imagem404.$inject = ['$window'];

    function imagem404($window) {
        //Retorna a imagem padrão não seja encontrado a imagem definica na tag ng-src
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

    angular
        .module('buscapeApp')
        .directive("outsideClick", ['$document','$parse', function( $document, $parse ){

        return {
            link: function( $scope, $element, $attributes ){
                var scopeExpression = $attributes.outsideClick,
                    onDocumentClick = function(event){
                        var isChild = $element.find(event.target).length > 0;
                        var element = $(event.target);
                        var isElementsToClick = element.hasClass("carrinho") || element.hasClass("itens-carrinho") || element.hasClass("remove") || element.hasClass("botao-remover")  || element.hasClass("fa-close");

                        if(!isChild && !isElementsToClick ) {
                            $scope.$apply(scopeExpression);
                        }
                    };

                $document.on("click", onDocumentClick);

                $element.on('$destroy', function() {
                    $document.off("click", onDocumentClick);
                });
            }
        }
    }]);

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
    vm.cart = [];
    vm.adicionarCarrinho = adicionarCarrinho;
    vm.removerCarrinho = removerCarrinho;
    vm.subTotal = 0;
    vm.subTotalParcelamento = 0;
    vm.toggleCart = toggleCart;
    vm.fecharCarrinho = fecharCarrinho;
    vm.selectItemPreview = selectItemPreview;

    init()

    function init() {
        $http.get("/js/data.json")
            .then(function(response) {
                console.log(response);
                var produtos = response.data.items.map(function(item) {
                    item.product.previewImage = item.product.images[0];
                    return item;
                });
                vm.produtos = response.data.items;
            });
    }

    function adicionarCarrinho(item) {
        vm.cart.push(item);

        subTotal();

    }
    function removerCarrinho(item) {
        var index = vm.cart.indexOf(item);
        vm.cart.splice(index, 1);
        subTotal();
    }
    function subTotal() {
        var subtotal = 0;
        var subTotalParcelamento = 0;

        for (var i = 0; i < vm.cart.length; i++) {
            subtotal = subtotal + vm.cart[i].product.price.value;
        }
        vm.subTotal = subtotal;
        // Subtotal dividio pela quantidade de parcelas;
        vm.subTotalParcelamento = vm.subTotal / 10;
    }

    function toggleCart () {
        console.log('toggle')
        vm.carrinhoAberto = !vm.carrinhoAberto;
    };

    function fecharCarrinho() {
        vm.carrinhoAberto = false;
    }
    function selectItemPreview(item, image) {
        item.product.previewImage = image;
        // var produto = vm.produtos.map(function(item) {
        //     item.product.
        //     debugger;
        // });
    }
});
