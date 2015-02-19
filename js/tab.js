/**
 *  Module
 *
 * Description
 */
var app = angular.module('panel', []);

app.controller('PanelController', function() {
    
    this.panel = 1;

    this.selectTab = function(setTab) {
        this.panel = setTab;
    }

    this.isSelected = function(checkTab)
    {
        return this.panel === checkTab;
    }

});