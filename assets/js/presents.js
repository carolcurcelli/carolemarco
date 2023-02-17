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
                    <li class="gift ${json[i].stock == 0 ? '--bought' : ''}">
                        <h3 class="gift__title">${json[i].name}</h3>
                        <div class="gift__image" style="background-image: url('${json[i].image}')"></div>
                        <p>
                            ${json[i].description}
                        </p>
                        <div class="gift__wrapper">
                            <span class="gift__value">R$ ${json[i].value}</span>
                            <span class="gift__quantity">
                                Resta${json[i].stock == 1 ? '' : 'm'} ${json[i].stock}
                            </span>
                            <a href="https://api.whatsapp.com/send?phone=5511971210335&text=Oi%20Marco,%20vim%20mandar%20o%20comprovante%20do%20presente%20do%20casamento!" target="_blank" class="button">Enviar comprovante</a>
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
                    <li class="gift ${json[i].stock == 0 ? '--bought' : ''}">
                        <h3 class="gift__title">${json[i].name}</h3>
                        <div class="gift__image" style="background-image: url('${json[i].image}')"></div>
                        <p>
                            ${json[i].description}
                        </p>
                        <div class="gift__wrapper">
                            <span class="gift__value">R$ ${json[i].value}</span>
                            <span class="gift__quantity">
                                Resta${json[i].stock == 1 ? '' : 'm'} ${json[i].stock}
                            </span>
                            <a href="https://api.whatsapp.com/send?phone=5511971210335&text=Oi%20Marco,%20vim%20mandar%20o%20comprovante%20do%20presente%20do%20casamento!" target="_blank" class="button">Enviar comprovante</a>
                        </div>
                    </li>
                `;
            }
    });
})();