(function() {
    function ModalCtrl($uibModal) {
        this.create = function(rooms) {
            return rooms.$add(room);
        },
            get: function (roomId) {
                return $firebase(ref.child('messages').child(messageId)).$asObject();
            },
                delete: function (room) {
                    return rooms$remove(room);
                }
    };
    return Room;
    
    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Modal', ModalCtrl]);
})();