describe('Example Service', function() {

  beforeEach(angular.mock.module('app'));

  beforeEach(inject(function(_exampleService_) {
    exampleService = _exampleService_;
  }));

  it('should exist', function() {
    expect(exampleService).toBeDefined();
  });

  it('should expose getName()', function() {
    expect(exampleService.getName).toBeDefined();
  });

  it('getName() should return a name string', function() {
    expect(exampleService.getName()).toEqual('ExampleServiceTest');
  });

  it('items in constructor should be exposed', function() {
    expect(exampleService.name).toEqual('ExampleServiceTest');
  });
});