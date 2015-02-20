/**
 *  Form
 *
 * Form module
 */
var app = angular.module('form', []);

var gem =
    {
        name: 'Gem Test',
        price: 17.77,
        description: 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou.',
        active: false,
        images: [],
        descriptions: [
            {title:"Foo"},
            {title:"Bar"}
        ],
    }

app.controller('StoreController', function(){
    this.gem = gem;
});

app.controller('DescriptionController', function(){
   
   this.description = {};

   this.addDescription = function(){
        gem.descriptions.push(this.description);
        this.description = {};
   }

});