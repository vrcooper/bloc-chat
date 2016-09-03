(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
        });
        
        $stateProvider
            .state('home', {
            url: '/',
            controller: 'HomeCtrl as home',
            templateUrl: '/templates/home.html'
        });
    }
    
    function BlocChatCookies($cookies) {
        var currentUser = $cookies.get('blocChatCurrentUser');
            if (!currentUser || currentUser === '') {
            
                $uibModal.open({
                    templateUrl: '/templates/username.html',
                    controller: 'BlocChatCookies'
                
            });   
      }
    }
    
    angular
            .module('blocChat', ["ui.router", "firebase","ui.bootstrap", "ngCookies"])
            .config(config)
            .run(['$cookies', '$uibModal', BlocChatCookies]);
    
    
})();

