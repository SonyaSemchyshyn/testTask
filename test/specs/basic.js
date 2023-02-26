const assert = require('assert')
const MainPage = require('../pageobjects/pageAllo')
const Basket = require('../pageobjects/basketPage')
const PhonesCategory = require('../pageobjects/phonesCategoryPage')
const { sumOfItems } = require('../pageobjects/basketPage')
describe('', () => {
    // beforeEach(async() => {
    //     await MainPage.open();
    // })

    it('Verify if the price filter working correctly for the following marketplaces', async () => {
        await MainPage.open();
        await MainPage.verifyTitle();
        await MainPage.itemCategoryPhones.click();
        await PhonesCategory.filterBrand.click();
        await PhonesCategory.filterAvailableInCity.click();
        await PhonesCategory.filterInStock.click();
        await PhonesCategory.filterNew.click();
        await PhonesCategory.inputPriceFrom.scrollIntoView().click().clearValue().addValue(1000)
        await PhonesCategory.popup.click()
        await browser.pause(3000)
        await PhonesCategory.dropdownSort.moveTo()
        await PhonesCategory.dropdownSortPrice.click()
        await browser.pause(2000)

        // let price = await Item.firstItemPrice.getText()
        // assert.strictEqual(price, '61 999')
        // добавити перевірку елементів по ціні 
    })
    it('Add items to the basket', async () =>{
        browser.url('https://allo.ua'); 
        await browser.pause(2000);
        const title = await browser.getTitle();
        await assert.strictEqual(title, 'АЛЛО - національний маркетплейс із найширшим асортиментом')

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

    it('Search the item', async()=>{
        browser.url('https://allo.ua'); 
        await browser.pause(2000);
        const title = await browser.getTitle();
        await assert.strictEqual(title, 'АЛЛО - національний маркетплейс із найширшим асортиментом')

        MainPage.searchItem('iphone')

    })
    it('')
})