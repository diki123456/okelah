const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class logoutpage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('#username');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnLogout () {
        return $('button[type="Logout"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async logoutpage (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogout.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('logout');
    }
}

module.exports = new Logoutpage();
