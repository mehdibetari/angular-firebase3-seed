"use strict";
describe('Auth', function() {
  beforeEach(function() {
    module('mock.firebase');
    module('firebase.auth');
  });

  it('should return $firebaseAuth instance', function() {
    inject(function (Auth, $firebaseAuth) {
      var testInst = $firebaseAuth();
      expect(Auth.prototype === testInst.prototype).toBe(true);
    });
  });
});