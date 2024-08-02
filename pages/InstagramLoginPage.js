exports.InstagramLoginPage =
class InstagramLoginPage{
    constructor(page){
        this.page = page;
        this.usernameInput = 'input[name="username"]';
        this.passwordInput = 'input[name="password"]';
        this.loginButton = 'button[type="submit"]';
    }

    async gotoInstagramLoginPage(url){
        await this.page.goto(url);
    }

    async loginInstagram(username, password){
        await this.page.locator(this.usernameInput).fill(username);
        await this.page.locator(this.passwordInput).fill(password);
        await this.page.locator(this.loginButton).click();
    }
}