(function(){

    const wedding = new Date('September 9, 2023 10:30:00');
    const partyEnds = new Date('September 9, 2023 16:59:59');
    const countdownArea = document.getElementById('countdown');

    function dateCreator(now) {

        const seconds = 1000
        const minutes = seconds * 60;
        const hours = minutes * 60;
        const days = hours * 24;
        const months = days * 30.5;
        const years = months * 12;
        const toTheWedding = wedding - now;
        const sinceTheWedding = now - wedding;

        const monthsToWedding = Math.floor((toTheWedding % years) / months);
        const daysToWedding = Math.floor((toTheWedding % months) / days);
        const hoursToWedding = Math.floor((toTheWedding % days) / hours);
        const minutesToWedding = Math.floor((toTheWedding % hours) / minutes);
        const secondsToWedding = Math.floor((toTheWedding % minutes) / seconds);

        const yearsSinceWedding = Math.floor(sinceTheWedding / years);
        const monthsSinceWedding = Math.floor((sinceTheWedding % years) / months);
        const daysSinceWedding = Math.floor((sinceTheWedding % months) / days);
        
        if (now < wedding) {
            return `Faltam 
                    ${monthsToWedding} m${monthsToWedding == 1 ? 'ês' : 'eses'},
                    ${daysToWedding} dia${daysToWedding == 1 ? '' : 's'},
                    ${hoursToWedding} hora${hoursToWedding == 1 ? '' : 's'}, 
                    ${minutesToWedding} minuto${minutesToWedding == 1 ? '' : 's'} e 
                    ${secondsToWedding} segundo${secondsToWedding == 1 ? '' : 's'}`
        } else if (
            now >= wedding && now <= partyEnds
            ) { 
                return `Estamos casando agora!`
        } else if (now > wedding) {
            if(daysSinceWedding <= 0) {
                return `Acabamos de casar!`
            } else if (yearsSinceWedding === 0) {
                return `Somos casados há
                    ${monthsSinceWedding} m${monthsSinceWedding == 1 ? 'ês' : 'eses'} e
                    ${daysSinceWedding} dia${daysSinceWedding == 1 ? '' : 's'}`
            } else {
                return `Somos casados há
                    ${yearsSinceWedding} ano${yearsSinceWedding == 1 ? '' : 's'},
                    ${monthsSinceWedding} m${monthsSinceWedding == 1 ? 'ês' : 'eses'} e
                    ${daysSinceWedding} dia${daysSinceWedding == 1 ? '' : 's'}`
            }
        }    
    } 

    function updateCountdown() {
        const now = new Date();
        const remainingTime = dateCreator(now);
        countdownArea.innerHTML = remainingTime;
    }

    // Chama a função updateCountdown() a cada 1 segundo
    setInterval(updateCountdown, 1000);

})();