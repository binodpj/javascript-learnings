const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

const breakfastItem = breakfastMenu.map((item, index) => `<p>Item ${index+1}: ${item}`);
document.getElementById("breakfastMenuItems").innerHTML = breakfastItem;

let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
    mainCourseItem += `<p>Item ${index+1}: ${item}</p>`;
});
document.getElementById("maincourseMenuItems").innerHTML = mainCourseItem;

let dessertItem = '';
for(let i = 0; i<dessertMenu.length;i++){
    dessertItem += `<p>Item ${i+1}: ${dessertMenu[i]}`;
}
document.getElementById("dessertMenuItems").innerHTML = dessertItem;