
const toggleMenu = () => {
    menu.classList.toggle('menu--open');
    // console.log(this.Menu);

}
  // Toggle the "menu--open" class on your menu reference.

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
console.log(menu.classList);
// menu.forEach(menu => new Menu(menu));
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// menuButton.forEach(menubtn => new MenuButton(menubtn));
// Using your menuButton reference, add a click handler that calls toggleMenu

menuButton.addEventListener('click', () => toggleMenu());
