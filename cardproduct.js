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
        style="position: relative;
        display: inline-block;
        margin: 0 auto;
        vertical-align: top;
        z-index: 102;">
        <img src="${cards[i].pic_product}" alt="picture" 
        style="box-sizing: content-box;
        border: 10px solid #fbbe18;
        border-radius: 100%;
        background-color: #fff;" >
      </div>
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