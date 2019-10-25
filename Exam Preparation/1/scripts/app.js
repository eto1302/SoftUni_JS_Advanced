function solve() {
    let inputArr = Array.from(document.querySelectorAll("form input"));
    let totalSum=0;
   
    let addButton = document.querySelector("form button");
    addButton.addEventListener("click", addBook);
   
    let newBookShelf = Array.from(
      document.querySelectorAll("#outputs section")
    )[1].lastElementChild;
    let oldBookShelf = Array.from(
      document.querySelectorAll("#outputs section")
    )[0].lastElementChild;
   
    function addBook(ev) {
      ev.preventDefault();
   
      let title = inputArr[0].value;
      let year = +inputArr[1].value;
      let price = +inputArr[2].value;
   
      if (title && year > 0 && price > 0) {
        if (year >= 2000) {
          let wrapper = document.createElement("div");
          wrapper.setAttribute("class", "book");
   
          let p = document.createElement("p");
          p.textContent = `${title} [${year}]`;
   
          let addButton = document.createElement("button");
          addButton.textContent = `Buy it only for ${price.toFixed(2)} BGN`;
          addButton.addEventListener('click',function(){
              totalSum+=price;
              Array.from(document.querySelectorAll('h1'))[1].textContent=`Total Store Profit: ${totalSum.toFixed(2)} BGN`;
              newBookShelf.removeChild(wrapper);
          });
   
          let moveButton = document.createElement("button");
          moveButton.textContent = "Move to old section";
   
          moveButton.addEventListener('click',function(){
             
              let updatedWrapper=document.createElement("div");
              updatedWrapper.setAttribute("class", "book");
   
              let updatedP=document.createElement("p");
              price = price - price * 0.15;
              updatedP.textContent = `${title} [${year}]`;
   
              let uppdatedButton = document.createElement("button");
              uppdatedButton.textContent = `Buy it only for ${price.toFixed(2)} BGN`;
              uppdatedButton.addEventListener('click',function(){
              totalSum+=price;
              Array.from(document.querySelectorAll('h1'))[1].textContent=`Total Store Profit: ${totalSum.toFixed(2)} BGN`;
              oldBookShelf.removeChild(updatedWrapper);
            });
            updatedWrapper.appendChild(updatedP);
            updatedWrapper.appendChild(uppdatedButton);
   
            newBookShelf.removeChild(wrapper);
            oldBookShelf.appendChild(updatedWrapper);
   
          });
   
          wrapper.appendChild(p);
          wrapper.appendChild(addButton);
          wrapper.appendChild(moveButton);
          newBookShelf.appendChild(wrapper);
   
        } else {
          let wrapper = document.createElement("div");
          wrapper.setAttribute("class", "book");
   
          let p = document.createElement("p");
          price = price - price * 0.15;
          p.textContent = `${title} [${year}]`;
   
          let addButton = document.createElement("button");
          addButton.textContent = `Buy it only for ${price.toFixed(2)} BGN`;
          addButton.addEventListener('click',function(){
              totalSum+=price;
              Array.from(document.querySelectorAll('h1'))[1].textContent=`Total Store Profit: ${totalSum.toFixed(2)} BGN`;
              oldBookShelf.removeChild(wrapper);
          });
          wrapper.appendChild(p);
          wrapper.appendChild(addButton);
          oldBookShelf.appendChild(wrapper);
        }
      }
    }
  }