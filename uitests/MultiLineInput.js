const SLI = require('./SingleLineInput');

class MultiLineInput extends SLI {
    set value(newValue) {
        if(Array.isArray(newValue))
            newValue = newValue.join('\n');
        super.value = newValue;
    }
    get value() {
        return super.value.split('\n');
    }
    get nLines() {
        return this.value.length;
    }
}

module.exports = MultiLineInput;