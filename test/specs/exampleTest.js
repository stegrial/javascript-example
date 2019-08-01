const { By, until, Builder } = require('selenium-webdriver');

(async function example() {
    const driver = new Builder().forBrowser('chrome').build();

    try {
        await driver.manage().setTimeouts( { implicit: 5000 } );
        await driver.get('https://trueautomation.io');

        await driver.findElement(By.css('header div.jet-button__container > a')).click();
        // await driver.wait(until.titleIs('TrueAutomation.IO'), 1000);

        await driver.findElement(By.css('div.sign-up-container > a')).click();
        await driver.findElement(By.name('email')).sendKeys('your@gmail.com');
    } finally {
        await driver.quit();
    }
})();