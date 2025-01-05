const home = function(){
    const content = document.querySelector('#content');
    const home = document.createElement('div');
    const homeText = document.createElement('p');
    const title = document.createElement('h1');

    content.replaceChildren();
    home.classList.add('home');
    title.textContent = 'Welcome to our Restaurant!';
    homeText.textContent = 'We serve the best food in town!';
    home.appendChild(title);
    home.appendChild(homeText);
    content.appendChild(home);
}

export default home;