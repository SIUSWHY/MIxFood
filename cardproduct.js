<<<<<<< HEAD
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
=======
const cards = [
    {
      logo: 'pic/markets/subway_logo.png',
      pic_product: 'pic/sandwiches/ovoshnoy.png',
      name_product: 'Овощной',
      ingridients:
        'Соус и овощи на выбор',
      price_item: 110,
    },
    {
      logo: 'pic/markets/subway_logo.png',
      pic_product: 'pic/sandwiches/subwayclub.png',
      name_product: 'Сабвэй Кдаб',
      ingridients:
        'Индейка, ветчина, ростбиф, соус и овощи на выбор',
      price_item: 180,
    },
  ];
 
  for (let i = 0; i < cards.length; i++) {
    const new_card = document.createElement('div');

    // new_card.style.background = 'white';
    new_card.style.width = '280px';
    new_card.style.height = '500px';
    new_card.style.margin = '15px';
    new_card.innerHTML = `
    <div class="card-product" style="height:500px;">
      <div class="logo-market">
        <img src="${cards[i].logo}" alt="picture" style="width: 220px; height: 50px;" >
      </div>
      <div class="product-icon-position" 
>>>>>>> 5bc523c9e7b732ba5e1086a3e2a47ee9f8be4317
        style="position: relative;
        display: inline-block;
        margin: 0 auto;
        vertical-align: top;
        z-index: 102;">
<<<<<<< HEAD
        <img src="${cards[i].image}" alt="picture" 
=======
        <img src="${cards[i].pic_product}" alt="picture" 
>>>>>>> 5bc523c9e7b732ba5e1086a3e2a47ee9f8be4317
        style="box-sizing: content-box;
        border: 10px solid #fbbe18;
        border-radius: 100%;
        background-color: #fff;" >
      </div>
<<<<<<< HEAD
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
=======
      <div class="name-product" id="name_product">${cards[i].name_product}</div>
      <div class="ingridients" style="height:50px;">${cards[i].ingridients}</div>
      <div class="price-item">Цена: ${cards[i].price_item} руб</div>

      <!-- Количество товара -->
      <div class="input-group quantity_goods">
          <input type="button" value="-" id="button_minus" class="button_minus">
          <input type="number" step="1" min="1" max="10" id="num_count" name="quantity" value="1" title="Qty" class="quantity-product">
          <input type="button" value="+" id="button_plus" class="button_plus">
      </div>

      <button class="buy-botton" onclick="inBotton()" >В КОРЗИНУ</button>
    </div>`;
  
    document.querySelector('.cards-wrapper').appendChild(new_card);
  }

//отправка в корзину
function inBotton(){
  var quantity = document.getElementById("quantity").value; // Объявляем переменную равную значению введенному в поле количество
      function empty_form ()
      {
          var quantity = document.getElementById('quantity').value;
          if(quantity == '')
          {
              alert('Вы забыли ввести текст.');
              return false;
          }   
          return true;
      }
  var price = quantity * 9000; // Объявляем переменную равную общей стоимости (кол-во * цену одного товара)
  var tovar = document.getElementsByTagName('span')[0].innerHTML; // Получаем доступ к содержимому элемента <span> с названием цвета товара
  var div = document.createElement("div"); // Создаем элемент div
  div.innerHTML = "<h3>Ваша заявка:<\/h3>\n <p>"+tovar+" "+price+" руб.</p>"; // Наполняем созданный div содержанием с подстановкой значения price
  document.getElementById("zayavka").appendChild(div); // Все вкладывается в <div id=zayavka></div>
  return false;
  //alert(tovar);
  }
//колиство товара
var numCount = document.getElementById('num_count');
var plusBtn = document.getElementById('button_plus');
var minusBtn = document.getElementById('button_minus');
plusBtn.onclick = function() {
  var qty = parseInt(numCount.value);
  qty = qty + 1;
  numCount.value = qty;
}
minusBtn.onclick = function() {
  var qty = parseInt(numCount.value);
  qty = qty - 1;
  numCount.value = qty;
}
>>>>>>> 5bc523c9e7b732ba5e1086a3e2a47ee9f8be4317
