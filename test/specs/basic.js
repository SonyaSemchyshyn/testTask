const assert = require('assert')
const MainPage = require('../pageobjects/pageAllo')
const Basket = require('../pageobjects/basketPage')
const PhonesCategory = require('../pageobjects/phonesCategoryPage')
const { sumOfItems } = require('../pageobjects/basketPage')
const config = require("../../wdio.conf").config;
describe('', () => {
    it('Verify if the price filter working correctly for the following marketplaces', async () => {
        await MainPage.open();
        await MainPage.verifyTitle();
        await MainPage.itemCategoryPhones.click();
        await PhonesCategory.filterBrand.click();
        await PhonesCategory.filterAvailableInCity.click();
        await PhonesCategory.filterInStock.click();
        await PhonesCategory.filterNew.click();
        await PhonesCategory.inputPriceFrom.scrollIntoView();
        await PhonesCategory.inputPriceFrom.click();
        await PhonesCategory.inputPriceFrom.clearValue();
        await PhonesCategory.inputPriceFrom.addValue(1000);
        await PhonesCategory.popup.click();
        await browser.pause(3000);
        await PhonesCategory.dropdownSort.moveTo();
        await PhonesCategory.dropdownSortPrice.click();
        await browser.pause(2000);
       const allPhones = await PhonesCategory.allPhonesOnPage;
       const prisesList = await Promise.all(allPhones.map(async (item, i, arr) => {
            const price = await(await item.$('.sum')).getText()
            return Number(price);
       }))
       console.log(prisesList);
        await Promise.all(allPhones)
        
    })
    it.skip('Add items to the basket', async () =>{
        await MainPage.open();
        await MainPage.verifyTitle();
        await MainPage.itemCategoryPhones.click();
        await PhonesCategory.filterBrand.click();
        await browser.pause(3000)
        await Basket.buyBtn.scrollIntoView()
        await Basket.buyBtn.click();
        await browser.pause(3000)
        await Basket.comeBackBtn.click();
        await MainPage.returnToMainPage.click();
        await browser.pause(3000);
        await MainPage.chooseCategoryFishBtn.scrollIntoView();
        await MainPage.chooseCategoryFishBtn.click();
        await MainPage.filterLights.click();
        await MainPage.itemTitle.getText();
        await Basket.buyBtnLight.click();
        let itemTitleInB = await Basket.getItemTitleInBacket.getText();
        // assert.equal(titleSecondItem, itemTitleInB); 
        // await assert.equal(sumOfItems(), Basket.totalSum); 
        // await Basket.removeBtn.isClicable();

    })

    it.skip('Search the item', async()=>{
        await MainPage.open();
        await MainPage.verifyTitle();
        MainPage.searchItem('iphone')

    })
    it.skip('')
})