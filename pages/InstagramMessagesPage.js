exports.InstagramMessagesPage=
class InstagramMessagesPage{
    constructor(page){
        this.page = page;
        this.notNowButton = "._a9--._ap36._a9_1";
        this.newMessageButton = "svg[aria-label='New message']";
        this.searchAccountInput = "input[placeholder='Search...']";
        this.firstCheckBox = "input[name='ContactSearchResultCheckbox']";
        //this.userNameCheckBox = "//span[@class='x1lliihq x193iq5w x6ikm8r x10wlt62 xlyipyv xuxw1ft'][normalize-space()='leomessi']";
        this.chatButton = "//div[contains(text(),'Chat')]";
    }

    async gotoChat(searchUsername){
        await this.page.locator(this.notNowButton).click();
        await this.page.locator(this.newMessageButton).click();
        await this.page.locator(this.searchAccountInput).fill(searchUsername);
        await this.page.locator(this.firstCheckBox).first().click();
        //await this.page.locator(this.userNameCheckBox).click();
        await this.page.locator(this.chatButton).click();
    }
}