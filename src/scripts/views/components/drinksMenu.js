export default function DrinksMenu(drinks) {
  let list = '';
  drinks.forEach((drink) => {
    list += `<li>${drink.name}</li>`;
  });
  return list;
}
