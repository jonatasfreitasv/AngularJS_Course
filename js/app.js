/**
 *  Module
 *
 * Description
 */
var app = angular.module('store', []);

var gem = {
    name: 'Gem Test',
    price: 17.77,
    description: '...',
    active: false,
}

var gems = [
    {
        name: 'Gem Test',
        price: 17.77,
        description: '...',
        active: false,
        images: []
    },
    {
        name: 'Gem Test',
        price: 77.17,
        description: '...',
        active: false,
        images: [
            "img/teste.jpg",
            "img/teste2.jpg",
        ]
    }
]

app.controller('StoreController', function(){
    this.product = gem;
    this.products = gems;
});