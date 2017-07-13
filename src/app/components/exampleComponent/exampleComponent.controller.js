import ExampleActions from '../../actions/example.actions';

export default class ExampleComponentController {
  constructor($ngRedux) {
    'ngInject';

    /* bind dependencies */
    this.$ngRedux = $ngRedux;

    /* set static properties */
    this.heading = 'Angular 1.6 Webpack Seed Project';

    /* subscribe to redux */
    this.unsubscribe = this.$ngRedux.connect(this.onStateChange, ExampleActions)(this);
  }

  /**
   * @description Used by $ngRedux connect method to expose state changes.
   * @param {object} state
   * @returns {object}
   */
  onStateChange(state) {
    /* return will bind to controller context (this), exposed to view via $ctrl */
    return {
      textFromState: state.example.text,
    };
  }

  /**
   * @description Example method for dispatching change to Redux state / store
   */
  updateState() {
    this.$ngRedux.dispatch(ExampleActions.updateExampleData(this.input));
  }

  $onDestroy() {
    this.unsubscribe();
  }
}
