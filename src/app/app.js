// require global assets
require('../styles/main.scss');

// import vendor modules
import angular from 'angular';
import ngAnimate from 'angular-animate';
import uiRouter from '@uirouter/angularjs';
import ngRedux from 'ng-redux';

// import app modules
import constants from './app.constants';
import store from './app.store';
import routes from './app.routes';
import components from './components/components.module';
import directives from './directives/directives.module';
import services from './services/services.module';
import views from './views/views.module';

angular
  .module('app', [
    ngAnimate,
    uiRouter,
    ngRedux,
    components,
    directives,
    services,
    views,
  ])
  .constant('constants', constants)
  .config(store)
  .config(routes);
