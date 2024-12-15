/* Kullanıcıdan ürün isimlerini alarak bir alışveriş listesi oluşturun. Tüm listeyi konsola yazdırın.*/

const shoppingList = [];

const howMany = Number(prompt("Kac tane esya alacaksin?"));
alert("Alicagin esyalari gir");
for (let i = 0; i < howMany; i++) {
  const stuff = prompt();
  shoppingList.push(stuff);
}
console.log(shoppingList);
