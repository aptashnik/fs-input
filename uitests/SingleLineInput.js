const CompositeElement = require('../tools/node_modules/fs-base/CompositeElement')

class SingleLineInput extends CompositeElement {

  get element() { return this.root }

  get value() {
    return this.element.getValue();
  }
  set value(newValue) {
    this.element.setValue(newValue);
  }
}

module.exports = SingleLineInput;