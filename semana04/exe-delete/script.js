const app = document.getElementById('root');
const authors = document.querySelector('.authors');
app.appendChild(authors);

fetch("https://reqres.in/api/users")

    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data)
        data.data.forEach(pessoa => {
            const card = document.createElement('div');
            card.setAttribute('class', 'card');
            card.setAttribute('id', pessoa.id)
            authors.appendChild(card);

            const name = document.createElement('h2');
            name.textContent = pessoa.first_name + " " + pessoa.last_name;
            card.appendChild(name);

            const email = document.createElement('p');
            email.textContent = pessoa.email;
            card.appendChild(email);

            const button = document.createElement('button');
            button.textContent = '✖';
            button.setAttribute('data-id', pessoa.id);
            card.appendChild(button);

            button.addEventListener('click', () => {
                const thisCard = button.parentElement;
                const cardPai = thisCard.parentElement;


                fetch("https://reqres.in/api/users", {
                    method: 'DELETE',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application'
                    },
                    body: JSON.stringify({
                        'id': button.getAttribute('data-id')
                    })
                })


                .then(() => {
                    cardPai.removeChild(thisCard)
                    })
                .catch((erro) => {
                        console.log(erro)

                    })



            })

        });
    })
    .catch((erro) => {
        console.log(erro)
    })