describe('Component: exampleComponent', function () {
  beforeEach(angular.mock.module('app'));

  var element;
  var scope;
  var controller;

  beforeEach(inject(function($rootScope, $compile){
    scope = $rootScope.$new();
    element = angular.element('<example-component></example-component>');
    element = $compile(element)(scope);
    controller = element.controller('exampleComponent');
    //scope.attr-value = 'test'; //if component has attributes
    scope.$apply();
  }));

  it('should have text binding set', function() {
    expect(controller.text).toEqual('Angular 1.6 Webpack Seed Project');
  });

});