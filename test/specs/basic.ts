import * as assert from 'assert';
import BasketPage from '../pageobjects/basketPage.js';
import MainPage from '../pageobjects/mainPage.js';
import PhonesCategoryPage from '../pageobjects/phonesCategoryPage.js';
// import PhonesCategory from'../pageobjects/phonesCategoryPage.js';
describe('', () => {
    beforeEach(async()=>{
        await MainPage.open();
    })
    it('Verify if the price filter working correctly for the following marketplaces', async () => {
        await MainPage.verifyTitle();
        await MainPage.itemCategoryPhones.click();
        await PhonesCategoryPage.filterBrand.click();
        await PhonesCategoryPage.filterInStock.click();
        await PhonesCategoryPage.filterNew.click();
        await PhonesCategoryPage.inputPriceFrom.scrollIntoView();
        await PhonesCategoryPage.inputPriceFrom.click();
        await PhonesCategoryPage.inputPriceFrom.clearValue();
        await PhonesCategoryPage.inputPriceFrom.addValue(57900);
        await PhonesCategoryPage.popup.click();
        await browser.pause(3000);
        await PhonesCategoryPage.dropdownSort.waitForClickable();
        await PhonesCategoryPage.dropdownSort.moveTo();
        await PhonesCategoryPage.dropdownSortPrice.click();
        await browser.pause(3000);
        const pricesList = await PhonesCategoryPage.getPriceList();
    
        let previousPrice = Number.MIN_VALUE;
        for await (const price of pricesList) {
            if(price >= previousPrice){
                previousPrice = price;
                continue;
            } 
            
            assert.fail(`Wrong price sort, because previous price ${previousPrice} more than current price ${price} `); 
        }
    })
    it('Add items to the basket', async () =>{
        await MainPage.verifyTitle();
        await MainPage.itemCategoryPhones.waitForClickable();
        await MainPage.itemCategoryPhones.click();
        await PhonesCategoryPage.filterBrand.click();
        const telephoneTitle = await PhonesCategoryPage.telephoneTitle();
        await browser.pause(3000);
        await BasketPage.buyBtn.scrollIntoView();
        await BasketPage.buyBtn.waitForClickable();
        await BasketPage.buyBtn.click();
        await browser.pause(3000);
        await BasketPage.comeBackBtn.click();
        await MainPage.returnToMainPage.click();
        await browser.pause(3000);
        await MainPage.chooseCategoryFishBtn.waitForDisplayed();
        await MainPage.chooseCategoryFishBtn.scrollIntoView();
        await MainPage.chooseCategoryFishBtn.click();
        await MainPage.filterLights.click();
        const lighterTitle = await PhonesCategoryPage.telephoneTitle();
        await BasketPage.buyBtnLight.click();
        await browser.pause(3000);
        const itemTitle = await BasketPage.getTitlesInBasket();
        const previousTitles = [telephoneTitle,lighterTitle];
        const results = await Promise.all(itemTitle);
        expect(results).toEqual(expect.arrayContaining(previousTitles));
     });

    it('Search the item', async() => {
        await MainPage.verifyTitle();
        await MainPage.searchItem('iPhone');
        await browser.pause(3000);
        const titleIPhone = await PhonesCategoryPage.getIPhonesTitles();
        const results = await Promise.all(titleIPhone);
        for await (const title of results){
            if(title.includes('iPhone')){
                continue;
            } assert.fail(` `); 
        }
    })
})
