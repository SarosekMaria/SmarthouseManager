module.exports = {
    'https://localhost:3000': function (browser) {
        browser
            .url('https://localhost:3000')
            .waitForElementVisible('#test_button', 10000)
            .clickLinkContainingText('Test!')
            .waitForElementPresent('#test_text', 10000)
            .assert.containsText('#test_text', "This is a test!")
            .end();
    }
};