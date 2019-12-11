var addToCartButtons = document.getElementsByClassName("shop-item-button");
for (var i = 0; i < addToCartButtons.length; i++) {
  var button = addToCartButtons[i];
  button.addEventListener("click", addToCartClicked);
}
