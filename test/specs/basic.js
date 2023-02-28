const assert = require('assert')
const MainPage = require('../pageobjects/mainPage')
const Basket = require('../pageobjects/basketPage')
const PhonesCategory = require('../pageobjects/phonesCategoryPage')

describe('', () => {
    beforeEach(async()=>{
        await MainPage.open();
    })
    it('Verify if the price filter working correctly for the following marketplaces', async () => {
        await MainPage.verifyTitle();
        await MainPage.itemCategoryPhones.click();
        await PhonesCategory.filterBrand.click();
        await PhonesCategory.filterInStock.click();
        await PhonesCategory.filterNew.click();
        await PhonesCategory.inputPriceFrom.scrollIntoView();
        await PhonesCategory.inputPriceFrom.click();
        await PhonesCategory.inputPriceFrom.clearValue();
        await PhonesCategory.inputPriceFrom.addValue(57900);
        await PhonesCategory.popup.click();
        await browser.pause(3000);
        await PhonesCategory.dropdownSort.waitForClickable();
        await PhonesCategory.dropdownSort.moveTo();
        await PhonesCategory.dropdownSortPrice.click();
        await browser.pause(3000);
        
        const allPhones1 = await PhonesCategory.allPhonesOnPage;
        const pricesList = await Promise.all(allPhones1.map(async (item, i, arr) => {
        const price1 = await(await item.$('.sum')).getText()
            const priceNum1 = Number(price1);
            return priceNum1;
       }))
        await Promise.all(allPhones);
    })
    it('Add items to the basket', async () =>{
        await MainPage.verifyTitle();
        await MainPage.itemCategoryPhones.waitForClickable();
        await MainPage.itemCategoryPhones.click();
        await PhonesCategory.filterBrand.click();
        await browser.pause(3000)
        await Basket.buyBtn.scrollIntoView();
        await Basket.buyBtn.waitForClickable()
        await Basket.buyBtn.click();
        await browser.pause(3000)
        await Basket.comeBackBtn.click();
        await MainPage.returnToMainPage.click();
        await browser.pause(3000);
        await MainPage.chooseCategoryFishBtn.waitForDisplayed();
        await MainPage.chooseCategoryFishBtn.scrollIntoView();
        await MainPage.chooseCategoryFishBtn.click();
        await MainPage.filterLights.click();
        await MainPage.itemTitle.getText();
        await Basket.buyBtnLight.click();
        let itemTitle = await Basket.getItemTitleInBacket.getText();
         const allPhones = await PhonesCategory.titleIphone;
        const titleList = await Promise.all(allPhones.map(async (item, i, arr) => {
            const price = await(await item.$('.sum')).getText()
            return Number(price);
       }))
        await Promise.all(allPhones);

    })

    it('Search the item', async()=>{
        await MainPage.verifyTitle();
        await MainPage.searchItem('IPhone');
        await Promise.all(await PhonesCategory.allIphones)
        const allPhones = await PhonesCategory.allIphones;
        const prisesList = await Promise.all(allPhones.map(async (item, i, arr) => {
            const price = await(await item.$('a[title=\'IPhone\']')).getText()
            return Number(price);
       }))
        await Promise.all(allPhones);

    })
})