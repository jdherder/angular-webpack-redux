import angular from 'angular';

import exampleService from './exampleService.service';

export default angular.module('app.services', [])
  .service('exampleService', exampleService)
  .name;
