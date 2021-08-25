function viewGoods(goods) {
    const goodsContainer = document.querySelector('.goods__items')
    goodsContainer.innerHTML = ''
    goods.forEach(item => {
        let checker = '';
        let btnAttr = '';
        let btnClass = '';
        if ( item.orderInfo.inStock == 0) {
             checker += '<span class="icon-close"></span>';
             btnAttr += 'disabled';
             btnClass += 'emptycartbtn'
        }
        else  {
            checker += '<span class="icon-check"></span>';
            btnClass += 'tocartbtn'
        }
        goodsContainer.innerHTML += `
            <div class="goods__items_item">
                <div class="item__content">
                    <div class="item__content_heart"><span class="icon-like_empty"></span> </div>
                    <img class="item__content_img" src="img/${item.imgUrl}" alt="goods">
                    <h4 class="item__content_title">${item.name}</h4>
                    <p class="item__content_text"> ${checker} ${item.orderInfo.inStock} left in stock <br>
                    Price: ${item.price} $ </p>
                    <button class="${btnClass} itembtn" ${btnAttr} >Add to cart</button>
                </div>
                <div class="goods__items_footer">
                    <div class="fullheart"><span class="icon-like_filled"></span> </div>
                    <div class="textreview">
                      <span> ${item.orderInfo.reviews}% positive reviews </span>
                      <span> ?? </span>
                    </div>
                    <div class="textreview">
                      <span> Above avarage</span>
                      <span> order</span>
                    </div>
                </div>
            </div>
        ` 
        })
  
}
viewGoods(items)
