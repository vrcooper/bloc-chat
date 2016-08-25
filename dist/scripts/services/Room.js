(function() {
    function Room($firebaseArray) {
        var firebaseRef = new Firebase("https://myfirstproject-ed656.firebaseio.com");
        var roomRef = $firebaseArray(firebaseRef.child('rooms'));
        
        // TODO: create a method that allows you to add a new chat room.
        // Check out angular-fire method for adding items to an array
        // hint: rooms.push should work....
        
        var rooms = {
            getRooms: getRooms,
            addRoom: addRoom,
            all: roomRef
        };
        
        return rooms;
        
        // create method that takes, as input, a room name and adds that room to the firebase array.
        
        function getRooms() {
            return {
                all: roomRef
            }
        };
        
        function addRoom(name) {
            roomRef.$add(name);
        };
       
        /* return {
          "all": rooms  
        };*/
    }
    
    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();