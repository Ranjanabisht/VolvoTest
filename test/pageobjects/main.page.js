const Page = require('./page');

class aMillionMorePage extends Page {
  
    get cookiesContainer () { return $('//*[@id="onetrust-group-container"]'); }
    get cookiesContainerLogo () { return $('//div[@class="banner_logo"]'); }
    get cookiesContainerBody () { return $('//*[@id="onetrust-policy-text"]'); }
    get cookiesContainerAcceptCookiesBtn () { return $('//*[@id="onetrust-accept-btn-handler"]'); }
    get cookiesContainerCookieSettingsBtn () { return $('//*[@id="onetrust-pc-btn-handler"]'); }

    get mainBodyModelIntoHeader () { return $('//*[@id="ModelIntro-1"]//h2'); }
    get mainBodyModelIntoDescription () { return $('//*[@id="ModelIntro-1"]//p'); } 

    get topNavigationItemOurCar(){ return $('//button[@id="nav:topNavCarMenu"]'); }
    get topNavigationItemMenu(){ return $('//button[@id="sitenav-sidenav-toggle"]') }
    get textBelowVideo(){ return $('//div[@data-component="TextStatement"]')}
    

    get mainBodyVideo () { return $('//*[@id="Video-1"]/section/div/button/div/video'); }
    get mainBodyVideoSrc () { return $('//*[@id="Video-1"]//source'); }
    get mainBodyVideoPlayButton () { return $('//*[@id="Video-1"]/section/div/button/div/button'); }
    get mainBodyVideoWatchTheStoryButton () { return $('//*[@id="Video-1"]/section/div/div/div/button'); }

    get IconCalloutsContainer () { return $('//div[@data-component="IconCallouts"]'); }
     
    get IconCalloutsSpeedCapIcon () { return $('//div[@data-autoid="iconCallouts:iconTextItem"]//*[@data-icon="speed-cap"]'); }
    get IconCalloutsSpeedCapTitle () { return $('//div[@data-autoid="iconCallouts:iconTextItem"]//*[@data-icon="speed-cap"]/parent::div/following-sibling::div/em'); }
    get IconCalloutsSpeedCapDescription () { return $('//div[@data-autoid="iconCallouts:iconTextItem"]//*[@data-icon="speed-cap"]/parent::div/following-sibling::div/div'); }
    
    get IconCalloutsHighwayPilotIcon () { return $('//div[@data-autoid="iconCallouts:iconTextItem"]//*[@data-icon="highway"]'); }
    get IconCalloutsHighwayPilotTitle () { return $('//div[@data-autoid="iconCallouts:iconTextItem"]//*[@data-icon="highway"]/parent::div/following-sibling::div/em'); }
    get IconCalloutsHighwayPilotDescription () { return $('//div[@data-autoid="iconCallouts:iconTextItem"]//*[@data-icon="highway"]/parent::div/following-sibling::div/div'); }
    
    get IconCalloutsDriverMonitoringCamerasIcon () { return $('//div[@data-autoid="iconCallouts:iconTextItem"]//*[@data-icon="camera2"]'); }
    get IconCalloutsDriverMonitoringCamerasTitle () { return $('//div[@data-autoid="iconCallouts:iconTextItem"]//*[@data-icon="camera2"]/parent::div/following-sibling::div/em'); }
    get IconCalloutsDriverMonitoringCamerasDescription () { return $('//div[@data-autoid="iconCallouts:iconTextItem"]//*[@data-icon="camera2"]/parent::div/following-sibling::div/div'); }
    
    get IconCalloutsCareKeyIcon () { return $('//div[@data-autoid="iconCallouts:iconTextItem"]//*[@data-icon="key"]'); }
    get IconCalloutsCareKeyTitle () { return $('//div[@data-autoid="iconCallouts:iconTextItem"]//*[@data-icon="key"]/parent::div/following-sibling::div/em'); }
    get IconCalloutsCareKeyDescription () { return $('//div[@data-autoid="iconCallouts:iconTextItem"]//*[@data-icon="key"]/parent::div/following-sibling::div/div'); }
    
    get IconCalloutsLearnMoreAboutCarSafetyTitle () { return $('//a[@data-autoid="iconCallouts:cta"]'); }
    get IconCalloutsFooter () { return $('//div[@data-component="IconCallouts"]//div[@data-nosnippet="true"]//p'); }

    get decadesOfInnovationSectionContainer () { return $('//div[@data-component="ImageWithText"]'); }
    get decadesOfInnovationSectionTitle () { return $('//div[@data-component="ImageWithText"]//h2'); }
    get decadesOfInnovationSectionDescription () { return $('//div[@data-component="ImageWithText"]//p'); }
    get decadesOfInnovationSectionLearnMoreBtn () { return $('//div[@data-component="ImageWithText"]//a'); }
    get decadesOfInnovationSectionImg () { return $('//div[@data-component="ImageWithText"]//img'); }
    

    async acceptAllCookies () {
    	await this.cookiesContainerAcceptCookiesBtn.isDisplayed();
        await this.cookiesContainerAcceptCookiesBtn.click();
    }

    async navigateToCarSafetyPage () {
        await this.IconCalloutsLearnMoreAboutCarSafetyTitle.isDisplayed();
        await this.IconCalloutsLearnMoreAboutCarSafetyTitle.click();
    }

    async navigateToSafetyHeritagePage () {
        await this.decadesOfInnovationSectionLearnMoreBtn.isDisplayed();
        await this.decadesOfInnovationSectionLearnMoreBtn.click();
    }

    async acceptCookiesIfDisplayed () {
    	try {
		await this.acceptAllCookies();
	} 
	catch (err) {
		console.log('Cookies already accepted.');
	}
    }
    
    
}

module.exports = new aMillionMorePage();