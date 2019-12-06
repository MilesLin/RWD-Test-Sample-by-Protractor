import { browser } from 'protractor';
import { go, compareScreenshot } from 'blue-harvest'
import { ProtractorScreenShotUtils } from 'protractor-screenshot-utils'

describe('Protractor Setup Pages', function() {

  const urls = [
    'protractor-setup',
    'server-setup', 
    'browser-setup',
    'frameworks'
  ]

  it('should valid Protractor Setup', async function() {
    
    // ProtractorScreenShotUtils 的使用方式
    const screenShotUtils = new ProtractorScreenShotUtils({
      browserInstance : browser
    });
    
    for (let index = 0; index < urls.length; index++) {
      const url = urls[index];
      await go(browser.baseUrl + url);
      const fileName = url;
      const golden  = './src/' + browser.params.imagePath + `/${browser.params.device}/${fileName}.png`;
      const diffDir = './src/' + browser.params.imagePath + `/${browser.params.device}/`;
      const actual = await screenShotUtils.takeScreenshot();
      const result = await compareScreenshot(actual, golden, diffDir);
      expect(result).toBeTruthy();  
    }
    
  });

});