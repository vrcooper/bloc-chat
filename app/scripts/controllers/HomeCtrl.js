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
       
         modalInstance.result.then(function (selectedItems) {
      this.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
        
    }
    angular
        .module('blocChat')
        .controller('HomeCtrl',HomeCtrl);
})();