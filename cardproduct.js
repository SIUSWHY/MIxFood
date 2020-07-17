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
      <div id="item_box" style="height:500px;">
        <div class="logo_market">
          <img src="${data.markets[cards[i].market]?.image}" alt="picture" style="">
        </div>
        <div class="product_icon_position" 
          style="position: relative;
          display: inline-block;
          margin: 0 auto;
          vertical-align: top;
          z-index: 102;">
          <img src="${cards[i].image}" alt="picture" 
          style="box-sizing: content-box;
          border: 10px solid #fbbe18;
          border-radius: 100%;
          background-color: #fff;max-width: 220px;max-height: 220px;" >
        </div>
        <div class="name_product" id="name_product">${cards[i].name}</div>
        <div class="ingridients" style="height:50px;" onclick="">${cards[i].description}
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
      <img src="i/shopping-basket.png" alt="picture" style="width: 290px; border-radius: 10px 10px 0px 0px;">
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
let numCount = document.getElementById('num_count');
let plusBtn = document.getElementById('button_plus');
let minusBtn = document.getElementById('button_minus');
plusBtn.onclick = function () {
  let qty = parseInt(numCount.value);
  qty = qty + 1;
  numCount.value = qty;
}
minusBtn.onclick = function () {
  let qty = parseInt(numCount.value);
  qty = qty - 1;
  numCount.value = qty;
}




//корзина
function inBasket(index) {
  card = cards[index];
  console.log(card);
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

var updateButton = document.getElementById('updateDetails');
var favDialog = document.getElementById('favDialog');
var outputBox = document.querySelector('output');

updateButton.addEventListener('click', function onOpen() {
  favDialog.showModal();
});

favDialog.addEventListener('close', function onClose() {
});


