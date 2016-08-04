(function() {
    function ModalCtrl($uibModal) {
        this.openModal = function() {
            this.modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'modal.html',
                controller: 'ModalCtrl.js',
                size: size,
                resolve: {
                    items: function() {
                        return $scope.items;
                    }
                }
            });
        },
            
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