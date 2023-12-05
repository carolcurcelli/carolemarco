(function(){

    document.addEventListener('DOMContentLoaded', () => {

        const body = document.querySelector('body');
        const gallery = document.getElementById('gallery');
        const showRoom = document.getElementById('showRoom');
        const closeShowRoom = document.getElementById('closeGallery');
        const showRoomName = document.getElementById('showRoomName');
        const showRoomPicture = document.getElementById('showRoomPicture');
        var selectedPicture = [];

        /* abrindo showroom */
        for (let i = 0; i < gallery.children.length; i++) {
            (function(index){
                gallery.children[i].onclick = function(event){ // pega a imagem clicada pelo index na array gallery
                    event.stopPropagation(); // Stop the event from propagating
                    selectedPicture.push(gallery.children[index].getAttribute('data-name')); // pega o nome
                    selectedPicture.push(gallery.children[index].getAttribute('data-src')); // e url da imagem
                    body.classList.add('showroom'); // faz travar o scroll
                    showRoom.classList.add('active'); // faz showroom aparecer
                    showRoomName.textContent = selectedPicture[0]; // insere nome
                    showRoomPicture.src = selectedPicture[1]; // e url do showroom
                }
            })(i);
        }

        /* fechar showroom */
        body.addEventListener('click', function(event){
            if (!showRoomPicture.contains(event.target)) {
                body.classList.remove('showroom');
                showRoom.classList.remove('active'); // esconde showroom
                selectedPicture = []; // resetta nome e url pra poder começar de novo
                
            }
        });

    });

})();