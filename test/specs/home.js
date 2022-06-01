const aMillionMorePage = require('../pageobjects/main.page');

const pageUrl = 'https://www.volvocars.com/intl/v/car-safety/a-million-more';
const pageTitle = 'A million more | Volvo Cars - International';

const cookiesContainerBodyText = 'We use cookies and local storage for the best experience on our website, including to personalise content and ads, to provide social media features and to analyse traffic. These cookies include targeted media cookies and advanced analytics cookies. For more information see our Information Notice on the cookie page. By clicking accept you agree to our use of cookies and local storage. To alter the types of cookies we use click “Cookie Settings"';
const introHeaderText = 'Ideas that change the world are often the most controversial.';
const introDescriptionText = 'After we introduced the 3-point safety belt, we faced a world of criticism. Since then, it has saved more than a million lives. Now it\'s time for the next step. For everyone\'s safety.';
const mainBodyText = 'A million more. With new and existing safety features, we are determined to save a million more lives.';

describe('TC0001 - Home Page Loading and Cookie Verification', () => {
	beforeEach (async () => {
		 aMillionMorePage.open();
		 browser.maximizeWindow();
	});
	
	it('It should verify url and title', async () => {
		await expect(browser).toHaveUrl(pageUrl);
		await expect(browser).toHaveTitle(pageTitle);
	});
	
	it('should show the cookies container and accept all cookies', async () => {
		await expect(aMillionMorePage.cookiesContainerLogo).toBeDisplayed();
		await expect(aMillionMorePage.cookiesContainerBody).toHaveText(cookiesContainerBodyText);
		await expect(aMillionMorePage.cookiesContainerAcceptCookiesBtn).toBeClickable();
		await expect(aMillionMorePage.cookiesContainerCookieSettingsBtn).toBeClickable();
		await aMillionMorePage.acceptAllCookies();
	});

	it('should show and verify the model intro header and text', async () => {
		await expect(aMillionMorePage.mainBodyModelIntoHeader).toBeDisplayed();
		await expect(aMillionMorePage.mainBodyModelIntoHeader).toHaveText(introHeaderText);
		await expect(aMillionMorePage.mainBodyModelIntoDescription).toBeDisplayed();
		await expect(aMillionMorePage.mainBodyModelIntoDescription).toHaveText(introDescriptionText);
	});

	it('should show and verify text statement below video', async () => {
		await expect(aMillionMorePage.textBelowVideo).toBeDisplayed();
		await expect(aMillionMorePage.textBelowVideo).toHaveText(mainBodyText);
	});
});