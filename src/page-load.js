const pageLoad = function(){
    const content = document.querySelector('#content');
    const button = document.createElement('button');
    button.id = "btn";
    button.textContent = "Hello";
    content.appendChild(button);
}

export default pageLoad