(function() {
    function ModalCtrl($uibModalInstance) {
        
            this.closeModal = function() {
                $uibModalInstance.dismiss();
                console.log("Call closeModal");
            }
            
            this.submitModal = function() {
                $uibModalInstance.close(this.newRoom.name);
            }
       /* this.create = function(rooms) {
            return rooms.$add(room);
        },
            this.get = function (roomId) {
                return $firebase(ref.child('messages').child(messageId)).$asObject();
            },
                this.delete = function (room) {
                    return rooms$remove(room);
                }*/
    };
   
    
    angular
        .module('blocChat')
        .controller('ModalCtrl', ModalCtrl);
})();