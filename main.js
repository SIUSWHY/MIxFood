/* MENU */

{
  //меню
  {
    const menu = document.createElement('div');
    menu.innerHTML = `
  <div class="menu_and_shopping_basket_layout">
  <div class="menu_type">
      <ul class="list_menu" >
          <li class="target active" data-category="sandwiches">
              <a class="list_menu_2" >Сендвичи</a>
          </li>
          <li class="target" data-category="shaurma">
              <a class="list_menu_2">Шаурма</a>
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

  // рендер по категории
  const renderByCategory = (category) => {
    const result = cards.filter(item => item.category === category);
    render(result);
  }

  const cards = data.menu;
  const defaultCategory = "sandwiches";

  renderByCategory(defaultCategory);

  // смена класса по клику
  const btn = $('.target');
  btn.on('click', function () {

    renderByCategory($(this).data('category'));

    $(".target").removeClass('active');
    $(this).addClass('active');

  });

  /*PRODUCT LIST*/

  // рендер продуктовых карточек 
  function render(cards) {
    document.querySelector('.cards_wrapper').innerHTML = '';

    for (let i = 0; i < cards.length; i++) {
      const new_card = document.createElement('div');

      new_card.classList.add('card_product');
      new_card.innerHTML = `  
      <div id="item_box">
        <div class="logo_market">
          <img src="${data.markets[cards[i].market]?.image}" alt="picture">
        </div>
        <div class="product_icon_position">
          <div class="product_icon_back_img";
          style="background: url(${cards[i].image});
          background-repeat: no-repeat;
          background-position: center; 
          background-size:contain;
          background-color: #fff;">
        </div>
        </div>
        <div class="name_product">${cards[i].name}</div>
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


  // меню с выбором ингридиентов 
  const favDialog = document.getElementById('favDialog');
  $(document).on('click', '.description_border', function () {
    favDialog.showModal();
  })

  $(document).on('click', '.closeButton', function () {
    favDialog.close();
  })

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



  // корзина покупок
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
}



{
  //окно выбора ингридиентов
  {
    const choise_ingredients = document.createElement('div');
    choise_ingredients.innerHTML = `
  <div class="style_dialog_box">
      <div class="style_dialog_head_text">
          <div class="style_head_text">Выберите размер сендвича</div>
          <button class="closeButton" type="submit" id="favDialog"><i class="fas fa-times-circle fa-3x"></i></button>
      </div>
  </div>
  <div class="justify_content_text_menu">
      <div class="style_dialog_text_menu">
          <nav>
              <ul class="style_menu">
                  <li class="ingredient_target" data-type="sizes">
                      <a class="style_text_menu active_type_menu ">Размер</a>
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
  <div class="price_text_style">Итого: <div class="total_price"> 0 </div> руб.</div>`;

    document.querySelector('.dialog_box_scale').appendChild(choise_ingredients);
  }

  let allMenuType = [
    data.sizes,     //1шт
    data.breads,    //1шт
    data.vegetables,//?шт
    data.sauces,    //3шт
    data.fillings,  //?шт
  ]

  render(allMenuType[0]);


  let i = 0;

  const btnNextType = $('.button_next_style');
  btnNextType.on('click', function () {

    if (i < allMenuType.length - 1) {
      i++
      $(".style_text_menu").removeClass('active_type_menu');
      document.querySelector(`.ingredient_target:nth-child(${i + 1})`).querySelector('.style_text_menu').classList.add('active_type_menu')
    }

    console.log(allMenuType[i]);
    render(allMenuType[i])

  });

  const btnBackType = $('.button_back_style');
  btnBackType.on('click', function () {

    if (i > 0) {

      i--
      $(".style_text_menu").removeClass('active_type_menu');
      document.querySelector(`.ingredient_target:nth-child(${i + 1})`).querySelector('.style_text_menu').classList.add('active_type_menu')
    }

    console.log(allMenuType[i]);
    render(allMenuType[i]);

  });

  let commponentsProductPopUp = {
    "size": '',
    "bread": '',
    "vegetable": [],
    "sauce": [],
    "filling": []
  }

  $(document).on('click', '.card_ingredient_style', function () {
    if (i === 0) {

      commponentsProductPopUp.size = $(this).find(".card_ingredient_title").text();
      $(".card_ingredient_style").removeClass('active_card_ingredient_style')
      $(this).addClass('active_card_ingredient_style')

    } else if (i === 1) {

      commponentsProductPopUp.bread = $(this).find(".card_ingredient_title").text();
      $(".card_ingredient_style").removeClass('active_card_ingredient_style')
      $(this).addClass('active_card_ingredient_style')

    } else if (i === 2) {

      let ingredient = $(this).find(".card_ingredient_title").text();
      $(this).toggleClass('active_card_ingredient_style');

      const index = commponentsProductPopUp.vegetable.indexOf(ingredient);
      if (index !== -1) {
        commponentsProductPopUp.vegetable.splice(index, 1);
      } else {
        commponentsProductPopUp.vegetable.push(ingredient);
      }

    } else if (i === 3) {
      let ingredient = $(this).find(".card_ingredient_title").text();
      const index = commponentsProductPopUp.sauce.indexOf(ingredient);

      if (commponentsProductPopUp.sauce.length < 3) {
        if (index !== -1) {
          commponentsProductPopUp.sauce.splice(index, 1);
          $(this).removeClass('active_card_ingredient_style');
        } else {
          commponentsProductPopUp.sauce.push(ingredient);
          $(this).addClass('active_card_ingredient_style');
        }
      } else {
        if (index !== -1) {
          commponentsProductPopUp.sauce.splice(index, 1);
          $(this).removeClass('active_card_ingredient_style');
        }
      }

    } else if (i === 4) {

      let ingredient = $(this).find(".card_ingredient_title").text();
      $(this).toggleClass('active_card_ingredient_style');

      const index = commponentsProductPopUp.filling.indexOf(ingredient);
      if (index !== -1) {
        commponentsProductPopUp.filling.splice(index, 1);
      } else {
        commponentsProductPopUp.filling.push(ingredient);
      }

    }
    console.log(commponentsProductPopUp);
  });

  // карточки с индридиентами
  function render(ingredients) {
    document.querySelector('.card_product_style').innerHTML = '';

    for (const i in ingredients) {
      const cardIngr = document.createElement('div');
      cardIngr.classList.add('card_ingredient_style');
      cardIngr.innerHTML = `  
    <div class="product_icon_position">
      <div class="ingredient_product_icon"; 
          style="background: url(${ingredients[i].image});
          background-repeat: no-repeat;
          background-position: center; 
          background-size:contain;
          background-color: #fff;">
      </div>
    </div>
    <div class="card_ingredient_title">${ingredients[i].name}</div>
    <div class="card_ingredient_price">Цена: ${ingredients[i].price} руб</div>`;

      document.querySelector('.card_product_style').appendChild(cardIngr);
    }
  }
}