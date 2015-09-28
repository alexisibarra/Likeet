angular.module('likeetApp')
    .service('userService', function UserService() {
        var User = this;
        User.id = '';
        User.email = '';

        User.isNotSet = function(){
            if(this.id === '' || this.email === ''){
                return true;
            } else {
                return false;
            }
        }
    });