// Localization completed
angular.module( 'headwind-kiosk' )
.controller( 'FooterController', function( $scope, $rootScope, $state, $modal, $timeout, $interval, $filter, $window,
                                           authService, localization, hintService ) {
    $scope.isHidden = function() {
        return $state.current.name === 'login';
    }
} );
