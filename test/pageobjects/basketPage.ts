class Basket {
    get buyBtn (){
        return $('button[title=\'Купити\']')
    }
    get buyBtnLight(){
        return $('button.v-btn--cart')
    }
    get comeBackBtn(){
        return $('button.comeback')
    }
    get firstItemPrice(){
        return $('div:first-child.price-box__cur')
    }
    get priceFirstItem(){
        return this.firstItemPrice.getText();
    }

    get priceSecondItem(){
        return $('div:last-child.price-box__cur')
    }

    get totalSum (){
        return $('span.total-box__price').getText()
    }

    async sumOfItems (priceFirstItem, priceSecondItem) {
       return Number(priceFirstItem + priceSecondItem);
    }
    get getItemTitleInBacket(){
        return $('span.wrap');
    }
    get removeBtn(){
        return $('svg.vi i-shared vi__close remove')
    }
}

export default  new Basket();