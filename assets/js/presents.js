(function() {
    const projectURL = 'https://carolemarco.com.br/'
    const destination = 'paris';
    const presentArea = document.getElementsByClassName('wishlist');
    fetch(`${projectURL}/assets/js/paris.json`)
        .then((response) => response.json())
        .then((json) => {
            console.log(presentArea);
            const count = Object.keys(json).length;

            for(let i = 0; i < count; i++) {
                presentArea[0].innerHTML += `
                    <li class="gift">
                        <h3 class="gift__title">${json[i].name}</h3>
                        <div class="gift__image" style="background-image: url('../assets/img/presents/${json[i].image}')"></div>
                        <span class="gift__date"><strong>${json[i].date}</strong></span>
                        <span class="gift__quantity">
                            Obrigado ${json[i].gifter}!
                        </span>
                        <p>
                            ${json[i].description}
                        </p>
                        <div class="gift__wrapper">
                            <a href="/paris#${json[i].name.toLowerCase().split(' ').join('').replace(/[^a-z0-9]/gi, '')}" class="button">Leia sobre o passeio</a>
                        </div>
                    </li>
                `;
            }
    });
    fetch(`${projectURL}/assets/js/roma.json`)
        .then((response) => response.json())
        .then((json) => {
            console.log(presentArea);
            const count = Object.keys(json).length;

            for(let i = 0; i < count; i++) {
                presentArea[1].innerHTML += `
                    <li class="gift">
                        <h3 class="gift__title">${json[i].name}</h3>
                        <div class="gift__image" style="background-image: url('../assets/img/presents/${json[i].image}')"></div>
                        <span class="gift__date"><strong>${json[i].date}</strong></span>
                        <span class="gift__quantity">
                            Obrigado ${json[i].gifter}!
                        </span>
                        <p>
                            ${json[i].description}
                        </p>
                        <div class="gift__wrapper">
                            <a href="/paris#${json[i].name.toLowerCase().split(' ').join('').replace(/[^a-z0-9]/gi, '')}" class="button">Leia sobre o passeio</a>
                        </div>
                    </li>
                `;
            }
    });
})();