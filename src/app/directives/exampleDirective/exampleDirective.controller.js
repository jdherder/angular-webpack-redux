export default class ExampleDirectiveLink {
  constructor($element) {
    this.$element = $element;

    this.setBackground('blue');
  }

  setBackground(color) {
    this.$element.css({ 'background-color': color });
  }

}
