import angular from 'angular';

import exampleComponent from './exampleComponent/exampleComponent.component';

export default angular.module('app.components', [])
  .component('exampleComponent', exampleComponent)
  .name;
