export default function FoodsMenu(foods) {
  let list = '';
  foods.forEach((food) => {
    list += `<li>${food.name}</li>`;
  });
  return list;
}
