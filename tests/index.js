'use strict';

describe('The Cart Page', function(){
  it('should prove that true is true', function(browser){
    browser.url(`${browser.launchUrl}`)
    .assert(true)
    .end();

  });


});
