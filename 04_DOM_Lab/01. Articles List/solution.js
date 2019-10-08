function createArticle() {
	let article = document.createElement("article")
	let h3 = document.createElement("h3");
	let p = document.createElement("p");

	let input = document.getElementById("createTitle");
	let content = document.getElementById("createContent");
	let articles = document.getElementById("articles");

	if (input === null || content === null || articles === null) {
		throw new Error("Something is missing...");
	}
	h3.innerHTML = input.value;
	p.innerHTML = content.value;

	article.appendChild(h3);
	article.appendChild(p);

	input.value = "";
	content.value = "";

	articles.appendChild(article);

	
}