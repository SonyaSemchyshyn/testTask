const assert = require('assert');
class MainPage {
    expectedTitle = 'АЛЛО - національний маркетплейс із найширшим асортиментом';

    async open(){
        browser.url(process.env.BASE_URL);
        await browser.pause(2000);
    }

    async verifyTitle(){
        
        await browser.waitUntil(async function (){
            return browser.getTitle() !== "";
        }, 3000);
        const title = await browser.getTitle();
        assert.strictEqual(title, this.expectedTitle)  
    }
    get itemCategoryPhones (){
        return $("a[title=\"Смартфони та телефони\"]");
    }

    // get filterBrand (){
    //     return $("=Samsung");
    // } 
    // є варіант по тексту пошукати а є варіант пошукати по ссилці

    // get filterAvailableInCity (){
    //     return $('a[data-id=\"available_in_city\"]');
    // }

    // get filterInStock (){
    //     return $('a[data-id=\'in_stock\']')
    // }

    // get filterNew (){
    //     return $('a[data-id=\'new\']')
    // }

    // get inputPriceFrom(){
    //     return $('input:first-child.f-range__form-input');
    // }

    // get popup (){
    //     return $('span.f-popup__btn-message');
    // }

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

    // get buyBtn (){
    //     return $('button[title=\'Купити\']')
    // }
    // get buyBtnLight(){
    //     return $('button.v-btn--cart')
    // }
    // get comeBackBtn(){
    //     return $('button.comeback')
    // }
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
        return $('#earch-form__input');
    }
    get showAllResultsBtn(){
        return $('button.search-result__nav-link')
    }
    async searchItem (itemName) {
        await this.searchInput.setValue(itemName);
        await this.showAllResultsBtn.click();

    }

}
// function checkPrice (item,price){
//     let arr = [item];
//     for(let i =0; i>item.lenght; i++){
//         item[i].price>=item[i-1].price;
//     }

module.exports = new MainPage();
