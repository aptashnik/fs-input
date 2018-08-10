const all = require('../tools/testing/jasmine-ddt').all
const SLI = require('./SingleLineInput');
const MLI = require('./MultiLineInput');

describe('Input', function() {
    beforeAll(() => {
        browser.url('input');
    })
    all('Input field accepts values', function*() {
            for (let v of ['sdfdsfxcdvxc', 'asdxzczx', 'wwwwwwwwwwwww'])
                yield {elementLocator: '.mat-input-element[id^="mat-input"]', valueToFill: v};
        }, (elementLocator, valueToFill) => {
            let f = new SLI(elementLocator);
            f.value = valueToFill;
            expect(f.value).toBe(valueToFill);
          }
    )
    all('The field accept only one line', function*() {
            yield {elementLocator: '.mat-input-element[id^="mat-input"]'};
        }, elementLocator => {
            let newLineSym = '\n'
              , value = `sss${newLineSym}sss`;
            const f = new SLI(elementLocator);
            f.value = value;
            expect(f.value).not.toContain(newLineSym);
          }
    )
    all('Type several lines into multi-line field', function*() {
            yield {elementLocator: 'textarea.mat-input-element[id^="mat-input"]'};
        }, elementLocator => {
            const f = new MLI(elementLocator);
            f.scroll()
            let value = 'sss\nsss';
            
            f.value = value;
            
            expect(f.value.length).toBeGreaterThan(1);
          }
    )
});