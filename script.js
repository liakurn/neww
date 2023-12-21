const dishes = [
  { image: '11.jpg', name: 'Харчо ', price: 250 },
  { image: '12.jpg', name: 'Борщ ', price: 250 },
  { image: '13.jpg', name: 'Сырники ', price: 150 },
  { image: '14.jpg', name: 'Блины ', price: 200 },
  { image: '15.jpg', name: 'Бешбармак ', price: 300 },
  { image: '16.png', name: 'Салянка ', price: 300 }
];

const menuGrid = document.getElementById('menuGrid');
dishes.forEach((dish, index) => {
  const menuItem = document.createElement('div');
  menuItem.classList.add('menu-item');
  menuItem.innerHTML = `<img src="${dish.image}" alt="${dish.name}"><h3>${dish.name}</h3><p>${dish.price} р.</p>`;
  menuItem.addEventListener('click', () => {
    menuItem.classList.toggle('selected');
  });
  menuGrid.appendChild(menuItem);
});

const orderButton = document.createElement('button');
orderButton.textContent = 'Заказать';
document.body.insertBefore(orderButton, document.querySelector('footer'));

orderButton.addEventListener('click', () => {
  const selectedItems = document.querySelectorAll('.menu-item.selected');
  const selectedDishes = Array.from(selectedItems).map(item => item.textContent);

  const confirmation = window.confirm(`Вы хотите заказать: \n${selectedDishes.join('\n')}?`);
  if (confirmation) {
    alert('Ваш заказ оформлен!');
  }
});

