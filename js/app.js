/**
 *  Store
 *
 * Store module
 */
var app = angular.module('store', ['product']);

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
        description: 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou.',
        active: false,
        images: []
    },
    {
        name: 'Gem Test',
        price: 77.17,
        description: 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou.',
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