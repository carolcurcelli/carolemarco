(function () {
    const menu = document.querySelector('#menu')
    const menuOpener = document.querySelector('#menuOpener');
    const menuCloser = document.querySelector('#close');
    const dom = document.querySelector('html');
    const menuItem = document.querySelectorAll('.nav__item');

    menuOpener.addEventListener('click', function(){
        dom.classList.add('--open');
    });
    menuCloser.addEventListener('click', function(){
        dom.classList.remove('--open');
    });
    if (dom.classList.contains('--open')){
        console.log('teste');
        ​document.onclick = function(){
            dom.classList.remove('--open');
        }​
    }
    for (let i = 0; i < menuItem.length; i++) {
        menuItem[i].addEventListener('click', function(){
            dom.classList.remove('--open');
        });
    }
})();