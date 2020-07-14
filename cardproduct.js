const cards = data.menu;

function renderCards() {

}

for (let i = 0; i < cards.length; i++) {
  const new_card = document.createElement('div');

  new_card.style.width = '280px';
  new_card.style.height = '500px';
  new_card.style.margin = '15px';
  new_card.innerHTML = `  
    <div class="card_product" id=""item_box style="height:500px;">
      <div class="logo_market">
        <img src="${data.markets[cards[i].market].image}" alt="picture">
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
        background-color: #fff;" >
      </div>
      <div class="name_product" id="name_product">${cards[i].name}</div>
      <div class="ingridients" style="height:50px;">${cards[i].description}</div>
      <div class="price_item">Цена: ${cards[i].price} руб</div>

      <!-- Количество товара -->
      <div class="input_group quantity_goods">
          <input type="button" value="-" id="button_minus" class="button_minus">
          <input type="number" step="1" min="1" max="10" id="num_count" name="quantity" value="1" title="Qty" class="quantity_product">
          <input type="button" value="+" id="button_plus" class="button_plus">
      </div>

      <button class="buy_basket" onclick="inBasket()" >В КОРЗИНУ</button>
    </div>`;

  document.querySelector('.cards_wrapper').appendChild(new_card);
}

const result = cards.filter(item => item.category === "burgers");


{
  const buy_basket = document.createElement('div');

  buy_basket.style.width = '280px';
  buy_basket.style.height = '300px';
  buy_basket.innerHTML = `
    <div>
      <div class="shopping_basket_style">
          <img src="i/shopping-basket.png" alt="picture" style="width: 290px; border-radius: 10px 10px 0px 0px; ">
            <div class="category_name"> 
                <div class="category_name_style">Название</div>
                <div class="category_name_style">Количество</div>
            </div>
            <div id="total-list"></div>
            <div class="order_price" id="price_product_in-basket">Итого: 0 руб</div>
            <div class="checkout_position"><button class="checkout_style">ОФОРМИТЬ ЗАКАЗ</button></div>
      </div>
    </div>`;

  document.querySelector('.buy_basket_js').appendChild(buy_basket);
}


//колиство товара
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




//отправка в корзину
function inBasket() {
  let num_Count = document.getElementById("num_count").value;     // Объявляем переменную равную значению введенному в поле количество
  // let total_price = num_Count * cards[i].menu.price;           // Объявляем переменную равную общей стоимости (кол-во * цену одного товара)
  let name_of_product = document.getElementById("name_product").innerHTML;            // Получаем доступ к содержимому элемента <span> с названием цвета товара
  // document.getElementById("price_product_in-basket").appendChild(total_price);     //!!!!!

  let name = document.createElement("div");        // Создаем элемент div
  // name_of_product = document.
  name.innerHTML = name_of_product        // Наполняем созданный div содержанием с подстановкой значения num_Count
  document.getElementById("total-list").appendChild(name);       // Все вкладывается в <div id=buy_basket-script></div>

  let quantity = document.createElement("div");
  quantity.innerHTML = num_Count;
  document.getElementById("total-list").appendChild(quantity);

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
