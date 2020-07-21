{
  const menu = document.createElement('div');
  menu.innerHTML = `
  <div class="menu_and_shopping_basket_layout">
  <div class="menu_type">
      <ul class="list_menu" >
          <li class="target" data-category="pancake" >
              <a class="list_menu_2">Блины</a>
          </li>
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

renderByCategory(defaultCategory);

const btn = $('.target');
btn.on('click', function () {

  renderByCategory($(this).data('category'));
  // defaultCategory.classList.add("active");

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
        <div class="ingridients" onclick="">${cards[i].description}
        </div>
        <div class="price_item">Цена: ${cards[i].price} руб</div>
  
        <!-- Количество товара -->
        <div class="input_group quantity_goods">
            <input type="button" value="-" id="button_minus" class="button_minus">
            <input type="number" step="1" min="1" max="10" id="num_count" name="quantity" value="1" class="quantity_product">
            <input type="button" value="+" id="button_plus" class="button_plus">
        </div>
  
        <button class="buy_basket" onclick="inBasket('${i}')" >В КОРЗИНУ</button>
      </div>`;

    document.querySelector('.cards_wrapper').appendChild(new_card);
  }
}
render(cards);



{
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


// колиство товара
// let numCount = document.getElementById('num_count');
// let plusBtn = document.getElementById('button_plus');
// let minusBtn = document.getElementById('button_minus');
// plusBtn.onclick = function () {
//   let qty = parseInt(numCount.value);
//   qty = qty + 1;
//   numCount.value = qty;
// }
// minusBtn.onclick = function () {
//   let qty = parseInt(numCount.value);
//   qty = qty - 1;
//   numCount.value = qty;
// }




//корзина
function inBasket(index) {
  card = cards[index];
  let num_Count = document.getElementsById("num_count").value;     // Объявляем переменную равную значению введенному в поле количество
  let name_of_product = document.getElementsById("name_product").innerHTML;            // Получаем доступ к содержимому элемента <span> с названием цвета товара
  let price = card.price;
  // let total_price = num_Count * price;             // Объявляем переменную равную общей стоимости (кол-во * цену одного товара)
  // document.getElementsById("price_product_in-basket").appendChild(total_price);     //!!!!!
  let name = document.createElement("div");        // Создаем элемент div
  // name_of_product = document.
  name.innerHTML = name_of_product        // Наполняем созданный div содержанием с подстановкой значения num_Count
  document.getElementsById("total-list").appendChild(name);       // Все вкладывается в <div id=buy_basket-script></div>

  let quantity = document.createElement("div");
  quantity.innerHTML = num_Count;
  document.getElementsById("total-list").appendChild(quantity);

  // if (name.hasOwnProperty(name_of_product)) { // если такой товар уже в корзине, то добавляем +1 к его количеству
  //   name[cards][2] += 1;
  // } else { // если товара в корзине еще нет, то добавляем в объект
  //   name[cards] = [itemTitle, itemPrice, 1];
  // }

  // const cart = {
  //   name: {
  //     price: 1,
  //     quantity: 1
  //   }
  // }

  return false;
}

//окно выбора ингридиентов

{
  var updateButton = document.getElementById('updateDetails');
  var favDialog = document.getElementById('favDialog');
  var outputBox = document.querySelector('output');

  updateButton.addEventListener('click', function onOpen() {
    favDialog.showModal();
  });

  favDialog.addEventListener('close', function onClose() {
  });


  {
    const choise_ingredients = document.createElement('div');
    choise_ingredients.innerHTML = `
  <div class="style_dialog_box">
      <div class="style_dialog_head_text">
          <div class="style_head_text">Выберите размер сендвича</div>
          <button class="closeButton" id="favDialog"><i class="fas fa-times-circle fa-2x"></i></button>
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
  <button class="button_next_style">ВПЕРЕД <i class="fas fa-angle-right"></i></button>
  <div class="card_product_style">&&&&&&&&&</div>
  <div class="price_text_style">Итого: ???? руб.</div>`;

    document.querySelector('.dialog_box_scale').appendChild(choise_ingredients);
  }



  const sauces = data.sauces;
  const vegetables = data.vegetables;
  const sizes = data.sizes;
  const fillings = data.fillings;
  let ingredients = fillings;

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
  render(ingredients);
  console.log(ingredients);
}