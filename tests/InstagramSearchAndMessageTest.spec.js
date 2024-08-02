import { test, expect} from '@playwright/test';
import { InstagramLoginPage } from '../pages/InstagramLoginPage';
import { InstagramHomePage } from '../pages/InstagramHomePage';
import { InstagramMessagesPage } from '../pages/InstagramMessagesPage';
import { InstagramInChatPage } from '../pages/InstagramInChatPage';
import testDataUtils from '../utils/testDataUtils';
import exp from 'constants';

test('Login to Instagram and send a text message', async ({ page }) => {
    const loginPage = new InstagramLoginPage(page);
    const homePage = new InstagramHomePage(page);
    const messagePage = new InstagramMessagesPage(page);
    const inChatPage = new InstagramInChatPage(page);

    //Login to Instagram and Navigate Homepage
    await loginPage.gotoInstagramLoginPage(testDataUtils.url);
    await loginPage.loginInstagram(testDataUtils.username, testDataUtils.password);

    //Go to messages section
    await homePage.gotoMessages();

    //Search for the target username and select the account to send message
    await messagePage.gotoChat(testDataUtils.searchUsername);

    //send the intended message
    await inChatPage.sendMessage(testDataUtils.message);

    await page.waitForTimeout(3000);

    //Wait for the page to wait for content and then verify that the message is sent
    await page.waitForSelector(inChatPage.messagesSent);
    const messages = await page.$$(inChatPage.messagesSent);
    if (messages.length > 0) {
        const lastMessage = messages[messages.length - 1];
        const textContent = await lastMessage.textContent();
        console.log("Last message text:", textContent);
        expect(textContent.trim()).toBe(testDataUtils.message);
    } else {
        console.error("No messages found.");
    }

})