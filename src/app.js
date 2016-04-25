angular.module('app', []);

angular.module('app').directive('numberToMonth', function(){
  
    return {
        restrict: 'AE',
        scope: {
        body: '@input'
        },
        template: '<p> Število: {{ body }}'
    };
    
});
angular.module('app').controller('MainController', function($scope){

    
    });
      
angular.module('app').filter('monthName', [function() {
    return function (monthNumber) { //1 = January
        var monthNames = [ 'Januar', 'Februar', 'Marec', 'April', 'Maj', 'Junij',
            'Julij', 'A0vgust', 'September', 'Oktober', 'November', 'December' ];
        return monthNames[monthNumber - 1];
    }
}]);