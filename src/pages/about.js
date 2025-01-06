import cookieMonster from '../utils/images/cookie-monster.png';
import cookie from '../utils/images/cookie.png';

const about = function(prevPage){
    

    const content = document.querySelector('#content');
    const aboutContent = document.createElement('div');

    content.replaceChildren(aboutContent);

    aboutContent.classList.add('about');

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
    
    const aboutText = document.createElement('p');
    aboutText.classList.add('about-text');
    aboutText.textContent = `We are a small business that has been making cookies for over 50 years.

    Our secret recipe has been passed down from generation to generation.
    We are proud to serve the best cookies in town!`;

    const aboutMe = document.createElement('p');
    aboutMe.classList.add('about-me');
    aboutMe.textContent = `Created for The Odin Project's Curriculum by: Rony :)`;


    aboutContent.appendChild(aboutText);
    aboutContent.appendChild(aboutMe);
}

export default about;