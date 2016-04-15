'use strict';

describe('Controller: ContactCtrl', function () {

  // load the controller's module
  beforeEach(module('generatorApp'));

  var ContactCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AboutCtrl = $controller('ContactCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ContactCtrl.awesomeThings.length).toBe(3);
  });
});
