exports.InstagramHomePage=
class InstagramHomePage{
    constructor(page){
        this.page = page;
        this.messageButton = "//span[contains(text(),'Messages')]";
    }

    async gotoMessages(){
        await this.page.locator(this.messageButton).click();
    }
}