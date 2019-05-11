let button = document.querySelector('.btn-search-movie');
let movies = document.querySelector('.movies');
 
button.addEventListener('click', (busca)=>{
    busca.preventDefault();
    //limpar a pagina para outra busca sem precisar recarregar
    movies.inneHTML = ' '

    fetch('http://www.omdbapi.com/?s='+movie.value+'&apikey=e2681bcc')

    .then((response) => {
        return response.json();
    })
    .then((infos) => {
        console.log(movie.value)
        infos.Search.forEach(filme => {
            let card = document.createElement('div');
            card.setAttribute('class', 'box');
            card.setAttribute('data-id', filme.imdbID);
            movies.appendChild(card);

            let Poster = document.createElement('img');
            Poster.src = filme.Poster;
            card.appendChild(Poster);

            let cardInfor = document.createElement('div');
            cardInfor.setAttribute('class', 'box-divider')
            card.appendChild(cardInfor);

            let paragrafo = document.createElement('p');
            cardInfor.appendChild(paragrafo);

            let titulo = document.createElement('span')
            titulo.textContent = filme.Title +" ";
            paragrafo.appendChild(titulo);

            let ano = document.createElement('span');
            ano.textContent ='('+ filme.Year+')';
            paragrafo.appendChild(ano);

            let tipo = document.createElement('p')
            tipo.textContent = filme.Type;
            cardInfor.appendChild(tipo);

        })
    })
    .catch((erro) => {
        console.log(erro)
    
    })
})
