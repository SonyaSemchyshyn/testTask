class BasketPage {
    get buyBtn (){
        return $('button[title=\'Купити\']')
    }

    get buyBtnLight(){
        return $('button.v-btn--cart')
    }

    get comeBackBtn(){
        return $('button.comeback')
    }
    
    get removeBtn(){
        return $('svg.vi i-shared vi__close remove')
    }
    get allItemsInBucket(){
        return $$('.product__item');
    }

    async getTitlesInBasket(){
        const allItemInBucket = await this.allItemsInBucket;
        const titlesList = await allItemInBucket.map(async(item)=> {
            const title = await(await item.$('.wrap')).getText();
            return title; 
        })
        return titlesList;
    }
}

export default  new BasketPage();