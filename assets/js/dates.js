(function(){

    const today = new Date();
    const wedding = new Date('September 9, 2023 10:30:00');
    const countdownArea = document.getElementById('countdown');

    function dateCreator(date) {
        const seconds = 1000
        const minutes = seconds * 60;
        const hours = minutes * 60;
        const days = hours * 24;
        const months = days * 30.5;
        const years = months * 12;
        let now = today.getTime()
        const difference = wedding - now;

        const yearsToWedding = Math.abs(difference / years);
        const monthsToWedding = Math.floor((difference % years) / months);
        const daysToWedding = Math.floor((difference % months) / days);
        const hoursToWedding = Math.floor((difference % days) / hours);
        const minutesToWedding = Math.floor((difference % hours) / minutes);
        const secondsToWedding = Math.floor((difference % minutes) / seconds);
        

        if (wedding >= today) {
            return `Faltam 
                    ${monthsToWedding} mese${monthsToWedding == 1 ? '' : 's'},
                    ${daysToWedding} dia${daysToWedding == 1 ? '' : 's'},
                    ${hoursToWedding} hora${hoursToWedding == 1 ? '' : 's'} e 
                    ${minutesToWedding} minuto${minutesToWedding == 1 ? '' : 's'}`
        } else if (
            today == 'September 9, 2023 10:30:00' 
            && today == 'September 9, 2023 17:00:00') { 
                return `Estamos casando agora!`
        } else if (wedding < today) {
            return `Somos casados há
                    ${yearsToWedding} ano${yearsToWedding == 1 ? '' : 's'},
                    ${monthsToWedding} mese${monthsToWedding == 1 ? '' : 's'} e
                    ${daysToWedding} dia${daysToWedding == 1 ? '' : 's'}`
        }
    
    
    
    } 
    countdownArea.innerHTML += dateCreator(wedding);

})();