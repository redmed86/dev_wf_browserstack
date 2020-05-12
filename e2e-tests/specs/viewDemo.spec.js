const assert = require('assert')

describe('Sample App - View Demo Local Testing', () => {
    it('should have the right text content in viewDemo', () => {
        browser.url('http://localhost:7225/#!/viewDemo')
        const viewDemo = $('//body/div[1]/p[2]')
        assert.strictEqual(viewDemo.getText(), 'This demo is going to pass!')
    })
})