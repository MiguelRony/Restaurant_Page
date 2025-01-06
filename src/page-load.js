import home from './pages/home.js';
import menu from './pages/menu.js';
import about from './pages/about.js';

const pageLoad = function(){
    home();

    let prevPage = 'home';

    const homeButton = document.querySelector('#home');
    const menuButton = document.querySelector('#menu');
    const aboutButton = document.querySelector('#about');

    homeButton.addEventListener('click', function(){
        home(prevPage);
        prevPage = 'home';
    });

    menuButton.addEventListener('click', function(){
        menu(prevPage);
        prevPage = 'menu';
    });

    aboutButton.addEventListener('click', function(){
        about(prevPage);
        prevPage = 'about';
    });
}

export default pageLoad