const { Builder, By, until } = require('selenium-webdriver');
(async function run() {
  const driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://localhost:5173/');
    await driver.wait(until.elementLocated(By.css('h1')), 10000);
    const title = await driver.findElement(By.css('h1')).getText();
    console.log('H1:', title);
  } finally {
    await driver.quit();
  }
})().catch(e => { console.error(e); process.exit(1); });
