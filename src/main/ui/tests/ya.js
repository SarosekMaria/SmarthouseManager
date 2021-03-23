module.exports = {
    'Test ya.ru': function(browser) {
        const firstResultSelector = '.serp-list .organic__subtitle b';

        browser
            .url('http://ya.ru', () => {
                console.log('Loading ya.ru...');
            })
            .waitForElementVisible('#text', 5000)
            .execute(function() {
                document.getElementById('text').value = 'Привет, Хабр!';
            })
            .submitForm('form')
            .waitForElementVisible(firstResultSelector, 5000)
            .getText(firstResultSelector, result => {
                browser.assert.equal(result.value, 'm.habrahabr.ru');
            })
            .end();
    }
};