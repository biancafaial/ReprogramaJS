let button = document.querySelector('.btn-search-sticker')
let stickers = document.querySelector('.stickers')

button.addEventListener('click', (evento) =>{
    evento.preventDefault();
   stickers.inneHTML = ' '
   

    fetch('https://api.giphy.com/v1/stickers/search?q='
    +sticker.value+'&api_key=XRQO9rtKA0jzysYCEKx8fFMGiGJyYbzY')
    
    .then((response) => {
        return response.json();
    })
    .then((infos) => {
        console.log(sticker.value);
        infos.data.forEach(gif => {
            let card = document.createElement('div');
            card.setAttribute('class', 'box');
            stickers.appendChild(card);

            let imagem = document.createElement('img');
            imagem.src = gif.images.original.url;
            card.appendChild(imagem)
            
        });
    })
    .catch((erro) => {
        console.log(erro)
    
    })
    

})

