function solve() {
  const AddView = (elementText) => {
      let num = Number(elementText.split(' ')[1]);
      num += 1;
      return `visited ${num} times`;
  };

  const allDivs = document.getElementsByClassName('link-1');
  const allDivsArray = Array.of(allDivs)[0];

  for (let i = 0; i < allDivsArray.length; i++) {
      const currentDivChildren = allDivsArray[i].children;

      
      currentDivChildren[0].addEventListener('click', () => {
          const paragraphElement = currentDivChildren[1];
          const currentParagraphValue = paragraphElement.textContent;
          const newParagraphValue = AddView(currentParagraphValue);
          paragraphElement.textContent = newParagraphValue;
      });
  }
}