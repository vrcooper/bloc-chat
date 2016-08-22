(function() {
    function HomeCtrl(Room, $uibModal,$scope) {
        this.chatRooms = Room.all;
        
        // preserve the value of "this"
        var Home = this;
        
        Home.roomService = Room;
        
        this.openModal = function() {
            // inside here, "this" refers to the "openModal" function, not the HomeCtrl
            Home.modalInstance = $uibModal.open({
//               template: "<h1>Hello world</h1>",
               templateUrl: '/templates/modal.html',
                controller: "ModalCtrl"
                
//                controller: function($scope, $uibModalInstance) {
//                    $scope.newRoom = {name: ''};
//                    
        /*              $scope.create = function() {
                        $uibModalInstance.close($scope.newRoom);
                        }*/
//                    }
//                }
                       });
            
            modalInstance.result.then(function (selectedItem) {
      this.selected = selectedItem;
                Home.roomService.addRoom(selectedItem);
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
        }
       
         
        
    }
    angular
        .module('blocChat')
        .controller('HomeCtrl',HomeCtrl);
})();