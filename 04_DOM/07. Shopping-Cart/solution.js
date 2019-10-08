function solve() {
   let buttons = document.getElementsByTagName('button');
   let productsNames = [];
   let totalCost = 0;
   let result = '';

   function clickEventAdd(i) {
      let name = document.getElementsByClassName('product-title')[i].innerHTML;
      if (!productsNames.includes(name)) {
         productsNames.push(name);
      }

      let price = +document.getElementsByClassName('product-line-price')[i].innerHTML;
      totalCost += price;

      result += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;
      let textArea = document.getElementsByTagName('textarea')[0];
      textArea.value = result;
   }





   for (let i = 0; i < buttons.length - 1; i++) {
      buttons[i].addEventListener('click', function () {
         clickEventAdd(i)
      }, false);
   }

   let checkoutButton = document.getElementsByClassName('checkout')[0];
   
   checkoutButton.addEventListener('click', function 
   clickEvent() {
      result += `You bought ${productsNames.join(', ')} for ${totalCost.toFixed(2)}.`;
      let textArea = document.getElementsByTagName('textarea')[0];
      textArea.value = result;

      for (let button of buttons) {
         button.disabled = true;
      }
   })
}