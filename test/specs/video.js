const aMillionMorePage = require('../pageobjects/main.page');

const mainVideoPreloadAttribute = 'auto';
const mainVideoSrcAttribute = 'https://www.volvocars.com/images/v/-/media/project/contentplatform/data/media/campaigns/volvo_amm_hero_16x9_loop_clean.mp4';
const mainVideoTypeAttribute = 'video/mp4';

describe('TC0003 - Main Video Verification', () => {
	beforeEach (async () => {
	    aMillionMorePage.open();
		browser.maximizeWindow();
		await aMillionMorePage.acceptCookiesIfDisplayed();
	});
	
	it('4.1 should show and verify the main video if autoplayed and points to correct playback source', async () => {
		await expect(aMillionMorePage.mainBodyVideo).toBeDisplayed();
		await expect(aMillionMorePage.mainBodyVideo).toHaveAttribute('preload', mainVideoPreloadAttribute);
		await expect(aMillionMorePage.mainBodyVideoSrc).toHaveAttribute('src', mainVideoSrcAttribute);
		await expect(aMillionMorePage.mainBodyVideoSrc).toHaveAttribute('type', mainVideoTypeAttribute);
		await expect(aMillionMorePage.mainBodyVideoPlayButton).toBeDisplayed();
		await expect(aMillionMorePage.mainBodyVideoWatchTheStoryButton).toBeDisplayed();
	});
	
});