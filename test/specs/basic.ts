import * as assert from 'assert';
import Basket from '../pageobjects/basketPage.js';
import MainPage from '../pageobjects/mainPage.js';
import PhonesCategory from'../pageobjects/phonesCategoryPage.js';

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
        const pricesList = await allPhones1.map(async (item) => {
            const price1 = await(await item.$('.v-pb__cur .sum')).getText()
            const priceNum1 = price1.replace(/\s/g,"");
            return Number(priceNum1);
         });
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
        await PhonesCategory.filterBrand.click();
        await browser.pause(3000);
        await Basket.buyBtn.scrollIntoView();
        await Basket.buyBtn.waitForClickable()
        await Basket.buyBtn.click();
        await browser.pause(3000);
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