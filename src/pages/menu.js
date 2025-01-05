
const menu = function(){
    const content = document.querySelector('#content');
    const menu = document.createElement('div');
    menu.classList.add('menu');
    content.replaceChildren(menu);
}

export default menu;