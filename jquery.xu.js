(function($) {
    'use strict';

    const whiteList = [355088586,2315570388,550431353,893352067,1758861613,690341392,287403972,1535125996,834629260,1049471106]
    $.xu = function(qq){
        return whiteList.indexOf(qq) != -1        
    }
})(jQuery);
