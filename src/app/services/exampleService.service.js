export default class ExampleService {
  constructor() {
    'ngInject';

    this.name = 'ExampleServiceTest';
  }

  getName() {
    return this.name;
  }
}
