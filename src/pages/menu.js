import cookieMonster from '../utils/images/cookie-monster.png';
import cookie from '../utils/images/cookie.png';

const menu = function(prevPage){
    

    const content = document.querySelector('#content');
    const menu = document.createElement('div');

    content.replaceChildren(menu);

    menu.classList.add('menu');

    if (prevPage === 'home') {
        const imgCookieMonster = document.createElement('img');
        const imgCookie = document.createElement('img');
        const imgContainer = document.createElement('div');

        imgCookieMonster.src = cookieMonster;
        imgCookieMonster.alt = 'Cookie Monster';
        imgCookieMonster.classList.add('sliding-out-monster');

        imgCookie.src = cookie;
        imgCookie.alt = 'Cookie';
        imgCookie.classList.add('sliding-out-cookie');

        imgContainer.appendChild(imgCookieMonster);
        imgContainer.appendChild(imgCookie);
        imgContainer.classList.add('slider');
        content.appendChild(imgContainer);
    }
    
    for (let i = 0; i < 10; i++){
        menu.appendChild(createCard());
    }
}

const createCard = function(){
    const card = document.createElement('div');
    const imgCard = document.createElement('img');
    const cardContent = document.createElement('div');
    const cardBtn = document.createElement('button');

    card.classList.add('card');
    imgCard.src = cookie;
    imgCard.alt = 'Cookie';
    cardContent.classList.add('card-content');
    cardContent.textContent = 'Cookie Nam Nam!';
    cardBtn.textContent = 'Order Now';
    cardBtn.classList.add('card-btn');

    card.appendChild(imgCard);
    card.appendChild(cardContent);
    card.appendChild(cardBtn);

    return card;
}

export default menu;