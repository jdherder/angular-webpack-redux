import angular from 'angular';

import exampleDirective from './exampleDirective/exampleDirective.directive';

export default angular.module('app.directives', [])
  .directive('exampleDirective', exampleDirective)
  .name;
