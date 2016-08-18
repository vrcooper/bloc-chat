(function() {
    function HomeCtrl(Room, $uibModal,$scope) {
        this.chatRooms = Room.all;
        
        // preserve the value of "this"
        var Home = this;
        this.openModal = function() {
            // inside here, "this" refers to the "openModal" function, not the HomeCtrl
            Home.modalInstance = $uibModal.open({
//               template: "<h1>Hello world</h1>",
               templateUrl: '/templates/modal.html',
                controller: "ModalCtrl"
//                controller: function($scope, $uibModalInstance) {
//                    $scope.closeModal = function() {
//                        alert("Should close the modal!");
//                    }
//                }
                       });
        }
        
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl',HomeCtrl);
})();