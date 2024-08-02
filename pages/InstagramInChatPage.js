exports.InstagramInChatPage =
class InstagramInChatPage{
    constructor(page){
        this.page = page;
        this.chaInput = "p[class='xat24cr xdj266r']";
        this.sendButton = "//div[contains(text(), 'Send')]";
        this.messagesSent = "//div[@class='html-div xexx8yu x4uap5 x18d9i69 xkhd6sd x1gslohp x11i5rnm x12nagc x1mh8g0r x1yc453h x126k92a xyk4ms5']";
    }

    async sendMessage(message){
        await this.page.locator(this.chaInput).fill(message);
        await this.page.locator(this.sendButton).click();
    }
}