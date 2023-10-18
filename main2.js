const d=document;

function convertidorDeDatos(id)
{
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((respuesta)=>respuesta.json())//convertidor
        .then((pokemon)=>{//esto es gracias al convertidor, listo
            mostrarPokemons(pokemon);
        });//gracias
}

function iteradorDeDatos(number)
{
    for (let i = 1; i <= number; i++) {
        convertidorDeDatos(i);//esto se ejecuta 9 veces
    }
}

function mostrarPokemons(pokemon) {
    let container=d.querySelector('.container');
    let content=`
    <div class='pokemon-block'>
        <div class='img-container'>
            <img src="${pokemon.sprites.front_default}">
        </div>
        <p>
            #${pokemon.id}
        </p>
        <p class="name">
            ${pokemon.name}
        </p>
    </div>
    `;
    container.insertAdjacentHTML('beforeend',content);
}

iteradorDeDatos(9);