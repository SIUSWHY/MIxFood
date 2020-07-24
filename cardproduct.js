{
  {
    const menu = document.createElement('div');
    menu.innerHTML = `
  <div class="menu_and_shopping_basket_layout">
  <div class="menu_type">
      <ul class="list_menu" >
          <li class="target" data-category="shaurma">
              <a class="list_menu_2">Шаурма</a>
          </li>
          <li class="target" data-category="sandwiches">
              <a class="list_menu_2" >Сендвичи</a>
          </li>
          <li class="target" data-category="burgers">
              <a class="list_menu_2" >Бургеры</a>
          </li>
          <li class="target" data-category="chicken">
              <a class="list_menu_2" >Курица & Картофель</a>
          </li>
          <li class="target" data-category="salads">
              <a class="list_menu_2" >Тортилья & Салаты</a>
          </li>
          <li class="target" data-category="drinks">
              <a class="list_menu_2" >Напитки & Десерты</a>
          </li>
      </ul>
  </div>`;
    document.querySelector('.menu_type_js').appendChild(menu);
  }


  const renderByCategory = (category) => {
    const result = cards.filter(item => item.category === category);
    render(result);
  }

  const cards = data.menu;
  const defaultCategory = "sandwiches";
  render(defaultCategory);

  const btn = $('.target');
  btn.on('click', function () {

    renderByCategory($(this).data('category'));

    $(".target").removeClass('active');
    $(this).addClass('active');

  });


  function render(cards) {
    document.querySelector('.cards_wrapper').innerHTML = '';

    for (let i = 0; i < cards.length; i++) {
      const new_card = document.createElement('div');

      new_card.classList.add('card_product');
      new_card.innerHTML = `  
      <div id="item_box">
        <div class="logo_market">
          <img src="${data.markets[cards[i].market]?.image}" alt="picture" style="">
        </div>
        <div class="product_icon_position">
          <img src="${cards[i].image}" alt="picture" class="product_icon" 
          style="" >
        </div>
        <div class="name_product" id="name_product">${cards[i].name}</div>
        <div class="ingredients"><a class="description_border">${cards[i].description}</a>
        </div>
        <div class="price_item">Цена: ${cards[i].price} руб</div>
  
        <!-- Количество товара -->
        <div class="input_group_quantity_goods">
          <div class="button_minus_style"><span class="button_minus">-</span></div>
          <input class="quantity_product" type="text" value="1" size="5"/>
          <div class="button_plus_style" ><span class="button_plus">+</span></div>
        </div>
  
        <button class="buy_basket" >В КОРЗИНУ</button>
      </div>`;

      document.querySelector('.cards_wrapper').appendChild(new_card);
    }
  }
  render(cards);


  let favDialog = document.getElementById('favDialog');

  $(document).on('click', '.description_border', function () {
    favDialog.showModal();
  })

  // favDialog.addEventListener('click', function onClose() {
  //   favDialog.close();
  // });


  // колиство товара
  $(document).on('click', 'button_minus_style', function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $('.button_plus_style').click(function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });


}

const buy_basket = document.createElement('div');
buy_basket.innerHTML = `
    <div class="shopping_basket_style">
      <img src="i/shopping-basket.png" class="shopping_basket_pic_style" alt="picture">
        <div class="category_name">
          <div class="category_name_style">Название</div>
          <div class="category_name_style">Количество</div>
        </div>
        <div id="total-list"></div>
        <div class="order_price" id="price_product_in-basket">Итого: 0 руб</div>
        <div class="checkout_position"><button class="checkout_style">ОФОРМИТЬ ЗАКАЗ</button></div>
      </div>`;

document.querySelector('.buy_basket_js').appendChild(buy_basket);



{
  //окно выбора ингридиентов
  {
    const choise_ingredients = document.createElement('div');
    choise_ingredients.innerHTML = `
  <div class="style_dialog_box">
      <div class="style_dialog_head_text">
          <div class="style_head_text">Выберите размер сендвича</div>
          <button class="closeButton" type="submit" id="favDialog"><i class="fas fa-times-circle fa-2x"></i></button>
      </div>
  </div>
  <div class="justify_content_text_menu">
      <div class="style_dialog_text_menu">
          <nav>
              <ul class="style_menu">
                  <li class="ingredient_target" data-type="sizes">
                      <a class="style_text_menu">Размер</a>
                  </li>
                  <li class="ingredient_target" data-type="breads">
                      <a class="style_text_menu">Хлеб</a>
                  </li>
                  <li class="ingredient_target" data-type="vegetables">
                      <a class="style_text_menu">Овощи</a>
                  </li>
                  <li class="ingredient_target" data-type="sauces">
                      <a class="style_text_menu">Соусы</a>
                  </li>
                  <li class="ingredient_target" data-type="fillings">
                      <a class="style_text_menu">Начинка</a>
                  </li>
                  <li class="ingredient_target" data-type="ready">
                      <a class="style_text_menu">Готово!</a>
                  </li>
              </ul>
          </nav>
      </div>
  </div>
  <div>
  <button class="button_back_style"><i class="fas fa-angle-left"></i> НАЗАД</button>
  <button class="button_next_style" id="trash">ВПЕРЕД <i class="fas fa-angle-right"></i></button>
  </div> 
  <div class="card_product_style"></div>
  <div class="price_text_style">Итого: ???? руб.</div>`;

    document.querySelector('.dialog_box_scale').appendChild(choise_ingredients);
  }

  let allMenuType = [
    data.sizes,     //1шт
    data.breads,    //1шт
    data.vegetables,//3шт
    data.sauces,    //?шт
    data.fillings,  //?шт
  ]

  render(allMenuType[0]);
  let i = 0;

  const btnNextType = $('.button_next_style');
  btnNextType.on('click', function () {

    if (i < allMenuType.length - 1) {
      i++
    }

    console.log(allMenuType[i]);
    render(allMenuType[i])

    // $(this).removeClass('active');
    // $(".style_text_menu").addClass('active');

  });

  const btnBackType = $('.button_back_style');
  btnBackType.on('click', function () {

    if (allMenuType.length < i < allMenuType.length + 1) {
      i--
    }

    console.log(allMenuType[i]);
    render(allMenuType[i]);

  });

  function render(ingredients) {
    document.querySelector('.card_product_style').innerHTML = '';

    for (const i in ingredients) {
      const cardIngr = document.createElement('div');
      cardIngr.classList.add('card_ingredient_style');
      cardIngr.innerHTML = `  
    <div class="product_icon_position">
            <img class="ingredient_product_icon" src="${ingredients[i].image}">
    </div>
    <div class="card_ingredient_title">${ingredients[i].name}</div>
    <div class="card_ingredient_price">Цена: ${ingredients[i].price} руб</div>`;

      document.querySelector('.card_product_style').appendChild(cardIngr);
    }
  }
}