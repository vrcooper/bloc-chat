 (function() {
    
    function BlockChatCookies($uibModalInstance, $scope, $cookieStore) {
        
        $scope.createUser = function(username) {
            $cookieStore.put('blocChatCurrentUser', username);
            $uibModalInstance.close()
        };
        
    }
     
     angular
        .module('blocChat')
        .controller('BlocChatCookies',BlockChatCookies);
    
})();