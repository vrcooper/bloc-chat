(function() {
    function Room($firebaseArray) {
        var firebaseRef = new Firebase("https://myfirstproject-ed656.firebaseio.com");
        var rooms = $firebaseArray(firebaseRef.child('rooms'));
        
        return {
          all: rooms  
        };
    }
    
    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();