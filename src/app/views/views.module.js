import angular from 'angular';

import home from './home/home.component';

export default angular.module('app.views', [])
  .component('home', home)
  .name;
