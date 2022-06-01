
const aMillionMorePage = require('../pageobjects/main.page');

const speedCapTitleText = 'Speed cap';
const speedCapDescriptionText = 'To send a strong signal about the dangers of speeding, we reduced the top speed of all our new cars to 180 km/h in 2020. We are also looking at how smart speed control and geofencing technology could automatically limit speeds near schools and hospitals in the future.';

const highwayPilotTitleText = 'Highway pilot';
const highwayPilotDescriptionText = 'With support from LiDAR sensors, the next generation of Volvo cars will be hardware-ready for autonomous drive. And over time, we will push out over-the-air software updates to provide fully autonomous highway driving.';

const driverMonitoringCamerasTitleText = 'Driver monitoring cameras';
const driverMonitoringCamerasDescriptionText = 'To help address intoxication and distraction in traffic, we are working on new in-car solutions. Driver monitoring cameras, together with other sensors, will allow the car to intervene when a clearly intoxicated or distracted driver risks serious injury or death.';

const careKeyTitleText = 'Care Key';
const careKeyDescriptionText = 'We\'ve recently introduced the Care Key, aimed at addressing speeding. With the Care Key, Volvo car owners can put a speed cap on the car when lending it to a younger family member or less experienced driver as a way of ensuring a safer ride.';

const learnMoreAboutCarSafetyTitleText = 'LEARN MORE ABOUT CAR SAFETY';
const learnMoreAboutCarSafetyTitleHrefAttribute='/intl/v/car-safety';

const CarSafetyPageUrl = 'https://www.volvocars.com/intl/v/car-safety';
const CarSafetyPageTitle = 'Car safety | Volvo Cars - International';

const IconCalloutsFooterText = 'Features depicted may not be standard or available for all styles, engine options, model years and regions.';

describe('TC0004 - Car Safety Options Verification', () => {
	beforeEach (async () => {
		aMillionMorePage.open();
        browser.maximizeWindow();
		await aMillionMorePage.acceptCookiesIfDisplayed();
		await (await aMillionMorePage.IconCalloutsContainer).scrollIntoView();
	});
		
	it('should show and verify the speed cap icon visibility, title value, and text value', async () => {
		await expect(aMillionMorePage.IconCalloutsSpeedCapIcon).toBeDisplayed();
		await expect(aMillionMorePage.IconCalloutsSpeedCapTitle).toBeDisplayed();
		await expect(aMillionMorePage.IconCalloutsSpeedCapTitle).toHaveText(speedCapTitleText);
		await expect(aMillionMorePage.IconCalloutsSpeedCapDescription).toBeDisplayed();
		await expect(aMillionMorePage.IconCalloutsSpeedCapDescription).toHaveText(speedCapDescriptionText);
	});
	
	it('should show and verify the highway pilot icon visibility, title value, and text value', async () => {
		await expect(aMillionMorePage.IconCalloutsHighwayPilotIcon).toBeDisplayed();
		await expect(aMillionMorePage.IconCalloutsHighwayPilotTitle).toBeDisplayed();
		await expect(aMillionMorePage.IconCalloutsHighwayPilotTitle).toHaveText(highwayPilotTitleText);
		await expect(aMillionMorePage.IconCalloutsHighwayPilotDescription).toBeDisplayed();
		await expect(aMillionMorePage.IconCalloutsHighwayPilotDescription).toHaveText(highwayPilotDescriptionText);
	});
	
	it('should show and verify the driver monitoring cameras icon visibility, title value, and text value', async () => {
		await expect(aMillionMorePage.IconCalloutsDriverMonitoringCamerasIcon).toBeDisplayed();	
		await expect(aMillionMorePage.IconCalloutsDriverMonitoringCamerasTitle).toBeDisplayed();
		await expect(aMillionMorePage.IconCalloutsDriverMonitoringCamerasTitle).toHaveText(driverMonitoringCamerasTitleText);		
		await expect(aMillionMorePage.IconCalloutsDriverMonitoringCamerasDescription).toBeDisplayed();
		await expect(aMillionMorePage.IconCalloutsDriverMonitoringCamerasDescription).toHaveText(driverMonitoringCamerasDescriptionText);
	});
	
	it('should show and verify the care key icon visibility, title value, and text value', async () => {
		await expect(aMillionMorePage.IconCalloutsCareKeyIcon).toBeDisplayed();
		await expect(aMillionMorePage.IconCalloutsCareKeyTitle).toBeDisplayed();
		await expect(aMillionMorePage.IconCalloutsCareKeyTitle).toHaveText(careKeyTitleText);
		await expect(aMillionMorePage.IconCalloutsCareKeyDescription).toBeDisplayed();
		await expect(aMillionMorePage.IconCalloutsCareKeyDescription).toHaveText(careKeyDescriptionText);
	});
	
	it('should show and verify the learn more about safety text field', async () => {
		await expect(aMillionMorePage.IconCalloutsLearnMoreAboutCarSafetyTitle).toBeDisplayed();
		await expect(aMillionMorePage.IconCalloutsLearnMoreAboutCarSafetyTitle).toHaveText(learnMoreAboutCarSafetyTitleText);
		await expect(aMillionMorePage.IconCalloutsLearnMoreAboutCarSafetyTitle).toHaveAttribute('href', learnMoreAboutCarSafetyTitleHrefAttribute);
		await aMillionMorePage.navigateToCarSafetyPage();
        await expect(browser).toHaveTitle(CarSafetyPageTitle);
		await expect(browser).toHaveUrl(CarSafetyPageUrl);
	});
	
	it('should show and verify the icon callouts footer', async () => {
		await expect(aMillionMorePage.IconCalloutsFooter).toBeDisplayed();
		await expect(aMillionMorePage.IconCalloutsFooter).toHaveText(IconCalloutsFooterText);
	});
	
});