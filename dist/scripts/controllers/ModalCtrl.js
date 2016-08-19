(function() {
<<<<<<< HEAD
    function ModalCtrl($uibModalInstance, $scope, Room) {
        
          $scope.closeModal = function(){
              // alert('clicked the close button');
            $uibModalInstance.close()               
          }
          
          $scope.submitModal = function() {
              // Call your Modal.Create("room_name") method to create the new room.
//              $uibModalInstance.create()
          }
=======
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
>>>>>>> 1405ce032a0db900531daf3e3a786b5faf51e2c8
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