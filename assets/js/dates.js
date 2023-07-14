(function(){

    const wedding = new Date('September 9, 2023 10:30:00');
    const countdownArea = document.getElementById('countdown');

    function dateCreator(now) {
        const seconds = 1000
        const minutes = seconds * 60;
        const hours = minutes * 60;
        const days = hours * 24;
        const months = days * 30.5;
        const years = months * 12;
        const difference = wedding - now;

        const yearsToWedding = Math.abs(difference / years);
        const monthsToWedding = Math.floor((difference % years) / months);
        const daysToWedding = Math.floor((difference % months) / days);
        const hoursToWedding = Math.floor((difference % days) / hours);
        const minutesToWedding = Math.floor((difference % hours) / minutes);
        const secondsToWedding = Math.floor((difference % minutes) / seconds);
        
        if (wedding >= now) {
            return `Faltam 
                    ${monthsToWedding} mes${monthsToWedding == 1 ? '' : 'es'},
                    ${daysToWedding} dia${daysToWedding == 1 ? '' : 's'},
                    ${hoursToWedding} hora${hoursToWedding == 1 ? '' : 's'}, 
                    ${minutesToWedding} minuto${minutesToWedding == 1 ? '' : 's'} e 
                    ${secondsToWedding} segundo${secondsToWedding == 1 ? '' : 's'}`
        } else if (
            now >= wedding 
            && now < new Date(wedding.getTime() + 30*60000)) { 
                return `Estamos casando agora!`
        } else if (wedding < now) {
            return `Somos casados há
                    ${yearsToWedding} ano${yearsToWedding == 1 ? '' : 's'},
                    ${monthsToWedding} mes${monthsToWedding == 1 ? '' : 'es'} e
                    ${daysToWedding} dia${daysToWedding == 1 ? '' : 's'}`
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