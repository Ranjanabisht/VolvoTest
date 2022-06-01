const aMillionMorePage = require('../pageobjects/main.page');

const decadesOfInnovationSectionTitleText = 'Decades of innovation';
const decadesOfInnovationSectionDescriptionText = 'Ever since our founding in 1927, we\'ve been designing cars that put people first. Discover our most important safety innovations over the years.';

const decadesOfInnovationSectionLearnMoreBtnText = 'LEARN MORE'
const decadesOfInnovationSectionLearnMoreBtnHrefAttribute = '/intl/v/car-safety/safety-heritage';

const safetyHeritagePageTitle = 'Safety innovations | Volvo Cars';
const safetyHeritagePageUrl = 'https://www.volvocars.com/intl/v/car-safety/safety-heritage';

const decadesOfInnovationSectionImgSrcAttribute = 'https://www.volvocars.com/images/v/-/media/project/contentplatform/data/media/campaigns/seat-belt_4096x3072.jpg?h=750&iar=0&w=1000';

describe('TC0004 - Decades Of Innovation Section Verfication', () => {
	beforeEach (async () => {
		await aMillionMorePage.open();
        browser.maximizeWindow();
		await aMillionMorePage.acceptCookiesIfDisplayed();
		await (aMillionMorePage.decadesOfInnovationSectionContainer).scrollIntoView();
	});
	
	it('should show and verify the decades of innovation section title and description', async () => {		
		await expect(aMillionMorePage.decadesOfInnovationSectionTitle).toBeDisplayed();
		await expect(aMillionMorePage.decadesOfInnovationSectionTitle).toHaveText(decadesOfInnovationSectionTitleText);
		await expect(aMillionMorePage.decadesOfInnovationSectionDescription).toBeDisplayed();
		await expect(aMillionMorePage.decadesOfInnovationSectionDescription).toHaveText(decadesOfInnovationSectionDescriptionText);
	});
	
	it('should show and verify the decades of innovation section learn more button', async () => {		
		await expect(aMillionMorePage.decadesOfInnovationSectionLearnMoreBtn).toBeDisplayed();
		await expect(aMillionMorePage.decadesOfInnovationSectionLearnMoreBtn).toHaveText(decadesOfInnovationSectionLearnMoreBtnText);
		await expect(aMillionMorePage.decadesOfInnovationSectionLearnMoreBtn).toHaveAttribute('href', decadesOfInnovationSectionLearnMoreBtnHrefAttribute);	
		await aMillionMorePage.navigateToSafetyHeritagePage();
		await expect(browser).toHaveTitle(safetyHeritagePageTitle);
		await expect(browser).toHaveUrl(safetyHeritagePageUrl);
	});
	
	it('should show and verify the decades of innovation section image', async () => {		
		await expect(aMillionMorePage.decadesOfInnovationSectionImg).toBeDisplayed();
		await expect(aMillionMorePage.decadesOfInnovationSectionImg).toHaveAttribute('src', decadesOfInnovationSectionImgSrcAttribute);
	});
});