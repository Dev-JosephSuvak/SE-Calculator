function costInput(copy, images, ingredients, labor, graphics, editing, promotion) {
    copy = document.getElementById('copy');
    images = document.getElementById('images');
    ingredients = document.getElementById('ingredients');
    labor = document.getElementById('labor');
    graphics = document.getElementById('graphics');
    editing = document.getElementById('editing');
    promotion = document.getElementById('promotion');
}

costInput();

let totalCost = Math.sum(copy, images, ingredients, labor, graphics, editing, promotion);

module.exports = totalCost;