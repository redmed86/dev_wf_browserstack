const assert = require('assert')

describe('Sample App - View 2 Local Testing', () => {
    it('should have the right text content in view2', () => {
        browser.url('http://localhost:7225/#!/view2')
        const view2 = $('//body/div[1]/p[1]')
        assert.strictEqual(view2.getText(), 'This is the partial for view 2.')
    })
})