function growingWord() {
  const colorMap = ["blue", "green", "red"];

  let word = document.getElementById("exercise").getElementsByTagName("p")[0];


  if (word === null) {
    throw new Error("Something is missing...");
  }

  let fontSize = word.style
    .fontSize
    .replace("px", "");


  word.style.fontSize = (fontSize === "0" ? "4" : fontSize * 2) + "px";

  if (word.style.color == colorMap[0]) {
    word.style.color = colorMap[1];
  }
  else if (word.style.color == colorMap[1]) {
    word.style.color = colorMap[2];
  }
  else {
    word.style.color = colorMap[0];
  }

}