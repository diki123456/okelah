const { given, when, then } = required('@wdio/cucumber-framework');

const { Given, When, Then } = require('@wdio/cucumber-framework');
const FrontPage = require('../pageobject/front-page');
const HomePage = require('../pageobject/home-page');

const pages = {
    logout = logoutpage
}

Given(/^the user is logged in$/, async () =>{
    await.FrontPage.open()

});

When(/^the user click the logout botton$/, async () =>{
    await FrontPage.login('wibowo.bulleye' , 'bulleye')

});

Then(/^the user should be redirected to the logout page$/, async () => {
    await HomePage.verifyLoginSuccess('wibowo.bulleye')

});