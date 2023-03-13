class PhonesCategoryPage {
    get filterBrand (){
        return $("=Samsung");
    } 

    get filterInStock (){
        return $('a[data-id=\'in_stock\']')
    }

    get filterNew (){
        return $('a[data-id=\'new\']')
    }

    get inputPriceFrom(){
        return $('input:first-child.f-range__form-input');
    }

    get popup (){
        return $('span.f-popup__btn-message');
    }

    get dropdownSort (){
        return $('span.sort-by__current');
    }

    get dropdownSortPrice (){
        return $('[title=\'від дешевих до дорогих\']');
    }

    get allPhonesOnPage (){
        return $$('.product-card__buy-box')
    }
    
    async getPriceList(){
        const allPhones1 = await this.allPhonesOnPage;
        const pricesList = await allPhones1.map(async (item) => {
            const price1 = await(await item.$('.v-pb__cur .sum')).getText()
            const priceNum1 = price1.replace(/\s/g,"");
            return Number(priceNum1);
         });
        return pricesList;
    }

    async telephoneTitle (){
        const title = await $('a.product-card__title').getText();
        return title;
    }

    get allIphonesOnPage(){
        return $$('a.product-card__title')
    }

    async getIPhonesTitles(){
        const allIPhonesOnPage = await this.allIphonesOnPage;
        const ListOfIpnones = await this.allIphonesOnPage.map(async(item)=> {
            const title = await(await item.getText());
            return title; 
        })
        return ListOfIpnones;
    }
}

export default new PhonesCategoryPage();