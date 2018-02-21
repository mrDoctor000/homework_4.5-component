'use strict';

userApp.component('userDetail', {

  bindings: {
    id: '<'
  },

  controller: function UserDetailCtrl($routeParams, UsersService) {

    this.userLoaded = false;

    this.user = UsersService.get({
      userId: this.id
    }, function(successResult) {
      // Окей!
      this.notfoundError = false;
      this.userLoaded = true;

      this.activeTab = 1;
      this.disableControlTab = true;
    }, function(errorResult) {
      // Не окей..
      this.notfoundError = true;
      this.userLoaded = true;

    });

    this.user.$promise.then(function(result) {
      //$scope.userLoaded = true;
    });

    this.deleteUser = function(userId) {

      this.user.$delete({
        userId: userId
      }, function(successResult) {
        // Окей!
        this.deletionSuccess = true;
      }, function(errorResult) {
        // Не окей..
        this.deletionError = true;
      });

    }

  },

  templateUrl: './src/UserDetail/UserDetail.html'

})