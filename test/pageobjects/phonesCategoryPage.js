class PhonesCategory {
    get filterBrand (){
        return $("=Samsung");
    } 
    
    get filterAvailableInCity (){
        return $('a[data-id=\"available_in_city\"]');
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

    get itemPrice (){
        return this.allPhonesOnPage.$$('.sum')
    }

    get allPhonesOnPage (){
        return $$('.product-card__buy-box')
    }

    get allIphones(){
        return $$('.product-card__content')
    }

    get titleIphone(){
        return $$('a[title=\'IPhone\']')
    }
}
module.exports = new PhonesCategory();