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
        return $('[title=\'від дорогих до дешевих\']');
    }
    get firstItemPrice (){
        return $('span.sum')
    }
    
    get allPhones (){
        return $$('.products-layout__container products-layout--grid:first-child').get(1)
    }


    get price (){
        return $('span.sum')
    }
}
module.exports = new PhonesCategory();