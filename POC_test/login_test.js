Feature('login');

Scenario('Invalid_Login @testcase1', ({ I }) => {

    I.amOnPage("https://www.amazon.com/");
    I.waitForElement('//div[@id="nav-signin-tooltip"]'); 
    I.click('//div[@id="nav-signin-tooltip"]');
    I.fillField('//input[@id="ap_email"]','dddd');
    I.click('//input[@id="continue"]');
    I.seeElement('//*[contains(text(),"cannot find")]');
    
    });

Scenario('Valid userName Invalid Password @testcase2', ({ I }) => {

    I.amOnPage("https://www.amazon.com/");
    I.waitForElement('//div[@id="nav-signin-tooltip"]'); 
    I.click('//div[@id="nav-signin-tooltip"]');
    I.fillField('//input[@id="ap_email"]','hurriyetdemiroren@gmail.com');
    I.click('//input[@id="continue"]');
    I.fillField('//input[@id="ap_password"]','mgddemir');
    I.waitForElement('//input[@id="ap_password"]');
    I.click('//input[@id="signInSubmit"]');
    I.seeElement('//*[contains(text(),"Your password is incorrect")]');
    
    });


    Scenario('Valid userName Valid Password @testcase3', ({ I }) => {

        I.amOnPage("https://www.amazon.com/");
        I.waitForElement('//div[@id="nav-signin-tooltip"]'); 
        I.click('//div[@id="nav-signin-tooltip"]');
        I.fillField('//input[@id="ap_email"]','hurriyetdemiroren@gmail.com');
        I.click('//input[@id="continue"]');
        I.fillField('//input[@id="ap_password"]','mgdamazon.26');
        I.waitForElement('//input[@id="ap_password"]');
        I.click('//input[@id="signInSubmit"]');
        I.seeElement('//*[contains(text(),"Hello, test")]');
        
        });