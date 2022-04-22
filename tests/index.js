'use strict';

describe('The Cart Page', function(){
  it('Should have expected title', function(browser){
    browser.url(`${browser.launchUrl}`)
    .assert.titleEquals('Anchorage Anchors Anchorporating')
    .end();

  });


});
