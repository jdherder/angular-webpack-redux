export default class HomeController {
  constructor(exampleService) {
    'ngInject';

    this.serviceTest = exampleService.getName();

    console.log(this.serviceTest);
  }
}
