(function(window){
    'use strict';
    function $(){}

    $.prototype.id = function (x){
        return document.getElementById(x);
    }
    window.app = window.app || {};
    window.app.$ = $;
})(window);
