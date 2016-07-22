angular.module('firebase.auth', ['firebase'])
  .factory('Auth', ['$firebaseAuth', function($firebaseAuth) {
    return $firebaseAuth();
  }]);
