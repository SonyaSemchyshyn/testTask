import * as assert from 'assert';
import { config } from"../../wdio.conf.js";
import PhonesCategory from './phonesCategoryPage.js';

class MainPage {
    expectedTitle = 'АЛЛО - національний маркетплейс із найширшим асортиментом';

    async open(){
        browser.url(config.baseUrl);
        await browser.pause(2000);
    }

    async verifyTitle(){
        const title = await browser.getTitle();
        assert.strictEqual(title, this.expectedTitle)  
    }

    get itemCategoryPhones (){
        return $("a[title=\"Смартфони та телефони\"]");
    }

    get dropdownSort (){
        return $('span.sort-by__current');
    }

    get dropdownSortPrice (){
        return $('[title=\'від дорогих до дешевих\']');
    }

    get firstTel (){
        return $('span.sum')
    }

    get allPhones (){
        return $('.products-layout__container products-layout--grid')
    }

    get price (){
        return $('span.sum')
    }

    async getPriceList(){
        const allPhones = await PhonesCategory.allPhonesOnPage;
        const prisesList = await Promise.all(allPhones.map(async (item, i, arr) => {
            const price = await(await item.$('.sum')).getText()
            return Number(price);
       }))
        await Promise.all(prisesList);
    }
   
    get returnToMainPage(){
        return $('[title=\'Перейти на головну сторінку\']')
    }

    get chooseCategoryFishBtn(){
        return $("//p[contains(text(),'Туризм та риболовля')] ");
    }

    get filterLights (){
        return $("=Ліхтарі");
    }

    get itemTitle (){
        return $('a.product-card__title')
    }

    get searchInput(){
        return $('#search-form__input');
    }

    get showAllResultsBtn(){
        return $('button.search-result__nav-link')
    }
    
    async searchItem (itemName) {
        await this.searchInput.waitForClickable()
        await this.searchInput.click()
        await this.searchInput.setValue(itemName);
        await this.showAllResultsBtn.waitForClickable()
        await this.showAllResultsBtn.click();

    }
}

export default new MainPage();