class Kitchen {
    constructor(budget) {
        this.budget = budget;
        this.menu = {};
        this.productsInStock = {};
        this.actionsHistory = [];
    }

    loadProducts(products) {
        products.forEach((product) => {
            const [productName, productQuantity, productPrice] = product.split(' ');

            if (this.budget >= productPrice) {
                if (!this.productsInStock.hasOwnProperty(productName)) {
                    this.productsInStock[productName] = Number(productQuantity);
                } else {
                    this.productsInStock[productName] += Number(productQuantity);
                }

                this.budget -= productPrice;
                this.actionsHistory.push(`Successfully loaded ${productQuantity} ${productName}`);
            } else {
                this.actionsHistory.push(`There was not enough money to load ${productQuantity} ${productName}`);
            }
        });

        return this.actionsHistory.join('\n').trim();
    }

    addToMenu(meal, neededProducts, price) {
        if (!this.menu.hasOwnProperty(meal)) {
            this.menu[meal] = {
                products: neededProducts,
                price: price
            };

            return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`
        } else {
            return `The ${meal} is already in our menu, try something different.`;
        }
    }

    showTheMenu() {
        let allProducts = '';
        if (Object.keys(this.menu).length === 0) {
            return `Our menu is not ready yet, please come later...`;
        } else {
            for (const product in this.menu) {
                allProducts += `${product} - $ ${this.menu[product].price}\n`;
            }
        }
        return allProducts.trim() + '\n';
    }

    makeTheOrder(meal) {
        if (this.menu.hasOwnProperty(meal)) {
            let mealProducts = this.menu[meal].products;
            let allProductsAvailable = true;

            mealProducts.forEach((val) => {
                let [product, qty] = val.split(' ');

                if (!this.productsInStock.hasOwnProperty(product)) {
                    allProductsAvailable = false;
                } else {
                    if (this.productsInStock[product] >= qty) {
                        this.productsInStock[product] -= qty;
                    } else {
                        allProductsAvailable = false;
                    }
                }
                this.budget += this.menu[meal].price;
            });

            if (allProductsAvailable === false) {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
            }

            return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`
        } else {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        }
    }
}