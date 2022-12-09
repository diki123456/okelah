const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class add to cart extends Page {
    /**
     * define selectors using getter methods
     */
    get open the product page () {
        return $('#product page');
    }

    get select the desired product () {
        return $('#select the product');
    }

    get click on the add to cart button () {
        return $('button[type="add to cart"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async add to cart (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btn add to cart.click();
    }

    /**  */
    open () {
        return super.open('add to cart');
    }
}

module.exports = new add to cart();

    