(function() {
    function HomeCtrl(Room, $uibModal,$scope) {
        this.chatRooms = Room.all;
        
        this.openModal = function() {
            this.modalInstance = $uibModal.open({
//               template: "<h1>Hello world</h1>",
               templateUrl: '/templates/modal.html',
                controller: 'ModalCtrl'
                       });
        }
        
        this.closeModal = function() {
            this.modalInstance = $uibModal.close({
                
            });
        }
        
        this.submitModal = function() {
            this.modalInstance = $uibModal.submit({
                
            });
        }
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl',HomeCtrl);
})();