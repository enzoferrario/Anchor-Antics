
var html = document.querySelector('html');
document.querySelector('html').className = 'js';


var anchors = [

  {
    name:"4 Pronged Glory", price:45.99, weight:87, image:"assets/4Prong.jpg"
  },
  {
    name:"Built for a Battleship", price:1699.99, weight:762, image:"assets/battleShip.jpg"
  },
  {
    name:"Black Pearl", price:75.99, weight:45, image:"assets/blackPearl.jpg"
  },
  {
    name:"Oceans Gem", price:450.99, weight:120, image:"assets/blueOcean.jpg"
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
    name:"The Grappler", price:29.99, weight:55, image:"assets/theGrapplingHook.jpg"
  },
  {
    name:"The Spoon", price:43.99, weight:88, image:"assets/theSpoon.jpg"
  },
  {
    name:"Wooden Master", price:7.99, weight:5, image:"assets/woodenMaster.jpg"
  }
]


/*
if (html.id === 'home-page') {


  var numOne = Math.floor(Math.random() * (10 - 0) + 0);
  var numTwo = Math.floor(Math.random() * (10 - 0) + 0);
  var numThree = Math.floor(Math.random() * (10 - 0) + 0);
  var numFour = Math.floor(Math.random() * (10 - 0) + 0);

  var itemOne = anchors[numOne];
  var itemTwo = anchors[numTwo];
  var itemThree = anchors[numThree];
  var itemFour = anchors[numFour];




  document.addEventListener("load", cart());


  function cart(){


    try{
    //var num = Math.floor(Math.random() * (10 - 0) + 0);

    document.querySelector('#name-one').innerHTML = "Name: " + itemOne.name;
    document.querySelector('#price-one').innerHTML = "Price: " + itemOne.price;
    document.querySelector('#weight-one').innerHTML = "Weight: " + itemOne.weight;
    document.querySelector('#image-one').src = itemOne.image;
    //var itemOne = inventory[numOne];

    //var num = Math.floor(Math.random() * (10 - 0) + 0);

    document.querySelector('#name-two').innerHTML = "Name: " + itemTwo.name;
    document.querySelector('#price-two').innerHTML = "Price: " + itemTwo.price;
    document.querySelector('#weight-two').innerHTML = "Weight: " + itemTwo.weight;
    document.querySelector('#image-two').src = itemTwo.image;
    //var itemTwo = inventory[numTwo];



    //var num = Math.floor(Math.random() * (10 - 0) + 0);

    document.querySelector('#name-three').innerHTML = "Name: " + itemThree.name;
    document.querySelector('#price-three').innerHTML = "Price: " + itemThree.price;
    document.querySelector('#weight-three').innerHTML = "Weight: " + itemThree.weight;
    document.querySelector('#image-three').src = itemThree.image;
    //var itemThree = inventory[numThree];



    //var num = Math.floor(Math.random() * (10 - 0) + 0);

    document.querySelector('#name-four').innerHTML = "Name: " + itemFour.name;
    document.querySelector('#price-four').innerHTML = "Price: " + itemFour.price;
    document.querySelector('#weight-four').innerHTML = "Weight: " + itemFour.weight;
    document.querySelector('#image-four').src = itemFour.image;
    //var itemFour = inventory[numFour];
  }
  catch(err){

  }

  }


}
*/
//Not Currently Using this, but will in the Future


if (html.id === 'review-page') {


  var viewOrderButton = document.getElementById('view-order');

  viewOrderButton.addEventListener('click', function(){

    console.log("Final Button")
    document.getElementById('item_one_final').innerText = itemOne.name;
    document.getElementById('item_two_final').innerText = itemTwo.name;
    document.getElementById('item_three_final').innerText = itemThree.name;
    document.getElementById('item_four_final').innerText = itemFour.name;






  });




}




/*

function run(){


  document.getElementById('item-one-final').innerText = itemOne.name + "       " + itemOne.price;
  document.getElementById('item-two-final').innerText = itemTwo.name + "       " + itemTwo.price
  document.getElementById('item-three-final').innerText = itemThree.name + "       " + itemThree.price
  document.getElementById('item-four-final').innerText = itemFour.name + "       " + itemFour.price

*/




//document.addEventListener("load", run());
