
var html = document.querySelector('html');
document.querySelector('html').className = 'js';


var anchors = [

  {
    name:"Built for a Battleship", price:1699.99, weight:762, image:"assets/battleShip.jpg"
  },

  {
    name:"Oceans Gem", price:450.99, weight:120, image:"assets/blueOcean.jpg"
  },

  {
    name:"The Grappler", price:29.99, weight:55, image:"assets/theGrapplingHook.jpg"
  },

  {
    name:"Black Pearl", price:75.99, weight:45, image:"assets/blackPearl.jpg"
  },

  {
    name:"4 Pronged Glory", price:45.99, weight:87, image:"assets/4Prong.jpg"
  },

  {
    name:"Modern", price:49.99, weight:35, image:"assets/modern.jpg"
  },
  {
    name:"Pirates Treasure", price:12000.99, weight:12, image:"assets/PiratesBounty.jpeg"
  },
  {
    name:"Rusted Beauty", price:9.99, weight:63, image:"assets/rustedBeauty.jpg"
  },

  {
    name:"The Spoon", price:43.99, weight:88, image:"assets/theSpoon.jpg"
  },
  {
    name:"Wooden Master", price:7.99, weight:5, image:"assets/woodenMaster.jpg"
  },

  {
    name:"Golden Modern", price: 15000.00, weight:360, image:"assets/golden-modern.png"
  },

  {
    name:"Almost an Anchor", price:5.00, weight:3, image:"assets/almost-an-anchor.jpg"
  }


]



if (html.id === 'home-page') {

  var cart = [];
  var cartText = " "
  var itemText = " "

  document.getElementById("r0").style.visibility = 'hidden';
  document.getElementById("r1").style.visibility = 'hidden';
  document.getElementById("r2").style.visibility = 'hidden';
  document.getElementById("r3").style.visibility = 'hidden';
  document.getElementById("r4").style.visibility = 'hidden';
  document.getElementById("r5").style.visibility = 'hidden';
  document.getElementById("r6").style.visibility = 'hidden';
  document.getElementById("r7").style.visibility = 'hidden';
  document.getElementById("r8").style.visibility = 'hidden';
  document.getElementById("r9").style.visibility = 'hidden';
  document.getElementById("r10").style.visibility = 'hidden';
  document.getElementById("r11").style.visibility = 'hidden';
  document.getElementById("r12").style.visibility = 'hidden';
  document.getElementById("r13").style.visibility = 'hidden';
  document.getElementById("r14").style.visibility = 'hidden';
  document.getElementById("r15").style.visibility = 'hidden';


addToCartButtons("Add-to-Cart-one", "cart-name-one", 'cart-price-one', "Built for a Battleship", 1700.00, 0, "proof-one")
addToCartButtons("Add-to-Cart-two", "cart-name-two", 'cart-price-two', "Oceans Gem", 450.99, 1, "proof-two")
addToCartButtons("Add-to-Cart-three", "cart-name-three", 'cart-price-three', "The Grappler", 29.99, 2, "proof-three")
addToCartButtons("Add-to-Cart-four", "cart-name-four", 'cart-price-four', "Black Pearl", 75.99, 3, "proof-four")
addToCartButtons("Add-to-Cart-five", "cart-name-five", 'cart-price-five', "Four Pronged Glory", 45.99, 4, "proof-five")
addToCartButtons("Add-to-Cart-six", "cart-name-six", 'cart-price-six', "Modern", 49.99, 5, "proof-six")
addToCartButtons("Add-to-Cart-seven", "cart-name-seven", 'cart-price-seven', "Pirates Treasure", 12000.00, 6, "proof-seven")
addToCartButtons("Add-to-Cart-eight", "cart-name-eight", 'cart-price-eight', "Rusted Beauty", 9.99, 7, "proof-eight")
addToCartButtons("Add-to-Cart-nine", "cart-name-nine", 'cart-price-nine', "The Spoon", 43.99, 8, "proof-nine")
addToCartButtons("Add-to-Cart-ten", "cart-name-ten", 'cart-price-ten', "Wooden Master", 7.99, 9, "proof-ten")
addToCartButtons("Add-to-Cart-eleven", "cart-name-eleven", 'cart-price-eleven', "Golden Modern", 15000.00, 10, "proof-eleven")
addToCartButtons("Add-to-Cart-twelve", "cart-name-twelve", 'cart-price-twelve', "Almost an Anchor", 5.00, 11, "proof-twelve")

removeItems("r0", 0, "c0");
removeItems("r1", 1, "c1");
removeItems("r2", 2, "c2");
removeItems("r3", 3, "c3");
removeItems("r4", 4, "c4");
removeItems("r5", 5, "c5");
removeItems("r6", 6, "c6");
removeItems("r7", 7, "c7");
removeItems("r8", 8, "c8");
removeItems("r9", 9, "c9");
removeItems("r10", 10, "c10");
removeItems("r11", 11, "c11");



var contBut = document.getElementById('cont')
contBut.addEventListener('click', function(){

  var total = 0;

  for (var i = 0; i < cart.length; i++){

    if (cart[i] != ''){

      total = total + cart[i].price

    }

  }

  var tax = Math.round(100*total*.0625)/100;
  var totalWithTax = Math.round(100*(total + (total*.0625)))/100;
  localStorage.setItem("tax", tax);
  localStorage.setItem("price", totalWithTax);

  var count = 0;
  var c = 'c'
  for (var i = 0; i < cart.length; i++){

    var c = c + i;

    if (cart[i] != ''){

      localStorage.setItem(c, cart[i].name + ": " + cart[i].price)
      count++;

    }

    var c = 'c'
  }

  localStorage.setItem("count", count);

});


  function addToCartButtons (bt, cartName, cartPrice, itemName, itemPrice, pos, proof){

    var bt = document.getElementById(bt);
    bt.addEventListener('click', function(){


      document.getElementById(proof).innerText = "Added to Cart!"
      cart.push(anchors[pos])
      //localStorage.setItem("Cart", cart);
      //addToCart(cartName, cartPrice, itemName, itemPrice);

      var c = 'c';
      var r = 'r';

      for (var i = 0; i < cart.length; i++){

          var c = c + i;
          var r = r + i


          if (cart[i] != ''){
          document.getElementById(c).innerText = "Item name: " + cart[i].name + " Price: " + cart[i].price;
          document.getElementById(r).style.visibility = "visible";

          }
          var c = 'c';
          var r = 'r';


      }

  });
}





  function removeItems (button, pos, item){

    var removeBT = document.getElementById(button);
    removeBT.addEventListener('click', function(){

        cart[pos] = ""
        document.getElementById(button).style.visibility = 'hidden';
        document.getElementById(item).innerText = "";


    });
  }
}



if (html.id === 'payment-page'){
  console.log("payment Page");

  var contBut = document.getElementById("cont");
  contBut = addEventListener('click', function(){

    var cardType = document.getElementById("card-type").value
    var cardNumber = document.getElementById("card-number").value
    var cardName = document.getElementById("name-on-card").value
    var billingOne = document.getElementById("billing-address-one").value
    var billingTwo = document.getElementById("billing-address-two").value
    var exp = document.getElementById("experation").value
    var secCode = document.getElementById("sec-code").value

    var pay = cardType + " " + cardNumber + " " + cardName + " " + billingOne + " " + billingTwo + " " + exp + " " + secCode;
    localStorage.setItem('payment', pay)






  });
}

if (html.id === 'shipping-page') {
  console.log("Shipping Page")


  var contBut = document.getElementById("cont");
  contBut.addEventListener('click', function(){

    var shipName = document.getElementById('ship-name').value;
    var shipAddress = document.getElementById("ship-address-one").value;
    var shipAddressTwo = document.getElementById("ship-address-two").value;
    var shipCity = document.getElementById("ship-city").value
    var shipCountry = document.getElementById("scountry").value
    var shipZip = document.getElementById("szip").value
    var shipState = document.getElementById("sstate").value
    var shipPo = document.getElementById("ship-po").value


    var sh = shipName + " " + shipAddress + " " + shipAddressTwo + " " + shipCity + " " + shipCountry + " " + shipZip + " " + shipState + " " + shipPo;
    localStorage.setItem('shipping', sh);
    console.log(sh);






  });



}



if (html.id === 'review-page') {

    var count = localStorage.getItem('count');
    var c = 'c';
    for (var i = 0; i < count; i++){
      c = c + i;
      var item = localStorage.getItem(c)

      if(item != 'undefined'){
      document.getElementById(c).innerText = item;
    }
      var c = 'c'

    }


    let tax = localStorage.getItem("tax");
    document.getElementById("tax").innerText = "Tax: " + tax;

    let total = localStorage.getItem("price");
    document.getElementById("total").innerText = "Total: " + total;



    let shipping = localStorage.getItem("shipping")
    document.getElementById("ship").innerText = shipping;
    console.log(shipping);

    let payment = localStorage.getItem("payment");
    document.getElementById("pay").innerText = payment;




}




/*

function run(){


  document.getElementById('item-one-final').innerText = itemOne.name + "       " + itemOne.price;
  document.getElementById('item-two-final').innerText = itemTwo.name + "       " + itemTwo.price
  document.getElementById('item-three-final').innerText = itemThree.name + "       " + itemThree.price
  document.getElementById('item-four-final').innerText = itemFour.name + "       " + itemFour.price

*/




//document.addEventListener("load", run());
