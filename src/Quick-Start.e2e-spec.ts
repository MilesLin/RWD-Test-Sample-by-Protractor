import { browser, by, element } from 'protractor';
import { go, removeMask, addMask, compareScreenshot } from 'blue-harvest'
import { ProtractorScreenShotUtils } from 'protractor-screenshot-utils'

describe('Quick Start Pages', function() {

  const urls = [
    'tutorial'
  ]

  it('should valid Quick Start', async function() {
    
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