(function() {
    const projectURL = 'https://carolemarco.com.br/'
    const presentArea = document.getElementsByClassName('wishlist');
    fetch(`${projectURL}/assets/js/casamento.json`)
        .then((response) => response.json())
        .then((json) => {
            console.log(presentArea);
            const count = Object.keys(json).length;

            for(let i = 0; i < count; i++) {
                presentArea[0].innerHTML += `
                    <li class="gift">
                        <h3 class="gift__title">${json[i].name}</h3>
                        <div class="gift__image" style="background-image: url('../assets/img/presents/casamento/${json[i].image}')"></div>
                        <span class="gift__date"><strong>${json[i].date}</strong></span>
                        <span class="gift__quantity">
                            Obrigado ${json[i].gifter}!
                        </span>
                        <p>
                            ${json[i].description}
                        </p>
                    </li>
                `;
            }
    });
    fetch(`${projectURL}/assets/js/paris.json`)
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
                        <div class="gift__wrapper">
                            <a href="${json[i].active ? `/paris/${json[i].id}` : ''}" class="button ${json[i].active ? '' : 'inactive'}">${json[i].active ? 'Leia sobre o passeio' : 'Em construção...'}</a>
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
                presentArea[2].innerHTML += `
                    <li class="gift">
                        <h3 class="gift__title">${json[i].name}</h3>
                        <div class="gift__image" style="background-image: url('../assets/img/presents/${json[i].image}')"></div>
                        <span class="gift__date"><strong>${json[i].date}</strong></span>
                        <span class="gift__quantity">
                            Obrigado ${json[i].gifter}!
                        </span>
                        <div class="gift__wrapper">
                            <a href="${json[i].active ? `/paris/${json[i].id}` : ''}" class="button ${json[i].active ? '' : 'inactive'}">${json[i].active ? 'Leia sobre o passeio' : 'Em construção...'}</a>
                        </div>
                    </li>
                `;
            }
    });
})();