userApp.directive('jsgrid', function () {
    return {
        // Restrict it to be an attribute in this case
        restrict: 'A',
        // responsible for registering DOM listeners as well as updating the DOM
        link: function (scope, element, attrs) {
            var cfg = scope.$eval(attrs.jsgrid);

            var config = {
                width: cfg.width,
                height: cfg.height,
                
                autoload: true,
                filtering: true,
                editing: false,
                sorting: true,
                paging: true,
                pageLoading: true,
                loadIndicationDelay: 300,
            };

            angular.extend(config, scope.gridConfig);

            var $element = $(element);
            
            $element.jsGrid(config);

            scope.jsgrid = $element.data("JSGrid");
        }
    };
});