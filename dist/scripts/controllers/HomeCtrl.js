(function() {
    function HomeCtrl(Room, $uibModal,$scope) {
        this.chatRooms = Room.all;
        
        this.openModal = function() {
            this.modalInstance = $uibModal.open({
                template: "<h1>Hello world</h1>",
//                templateUrl: '/templates/modal.html',
                controller: 'ModalCtrl'
                       });
        }
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl',HomeCtrl);
})();