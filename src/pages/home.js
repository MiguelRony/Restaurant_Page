import cookieMonster from '../utils/images/cookie-monster.png';
import cookie from '../utils/images/cookie.png';

const home = function(prevPage){
    const content = document.querySelector('#content');
    const home = document.createElement('div');
    const homeText = document.createElement('p');
    const title = document.createElement('h1');
    const imgCookieMonster = document.createElement('img');
    const imgCookie = document.createElement('img');
    const imgContainer = document.createElement('div');

    content.replaceChildren();
    home.classList.add('home');
    title.textContent = 'Cookies! Nam, nam, nam!';
    homeText.textContent = `We have the best cookies in town!`;
    home.appendChild(title);
    home.appendChild(homeText);
    content.appendChild(home);

    imgCookieMonster.src = cookieMonster;
    imgCookieMonster.alt = 'Cookie Monster';
    imgCookieMonster.classList.add('sliding-monster');

    imgCookie.src = cookie;
    imgCookie.alt = 'Cookie';
    imgCookie.classList.add('sliding-cookie');

    imgContainer.appendChild(imgCookieMonster);
    imgContainer.appendChild(imgCookie);
    imgContainer.classList.add('slider');
    content.appendChild(imgContainer);
}

export default home;