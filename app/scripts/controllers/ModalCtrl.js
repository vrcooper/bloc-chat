(function() {
    function ModalCtrl($uibModalInstance, $scope, Room) {
        
          $scope.closeModal = function(){
              // alert('clicked the close button');
            $uibModalInstance.close()               
          }
          
          $scope.submitModal = function() {
              // Call your Modal.Create("room_name") method to create the new room.
//              $uibModalInstance.create()
          }
    };
    
    
   
    
    angular
        .module('blocChat')
        .controller('ModalCtrl', ModalCtrl);
})();

/** 
 * Another way to define controllers and services is, rather than creating a function
 within a closure,put the function inline to the controller method.  Since there's no function name
 (ie: ModalCtrl), you don't need a closure to hide the function.
**/
//angular
//    .module('blocChat')
//    .controller('ModalCtrl', function($scope, $uibModalInstance) {
//
//});