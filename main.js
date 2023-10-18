fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la solicitud');
        }
        return response.json();
    })
    .then(data => {
        // data.results contiene una lista de Pokémon
        data.results.forEach(pokemon => {
            fetch(pokemon.url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Error en la solicitud');
                    }
                    return response.json();
                })
                .then(pokemonData => {
                    // Accede a la URL de la imagen del Pokémon
                    const imageUrl = pokemonData.sprites.front_default;

                    // Crea un elemento de imagen y configura su atributo "src" con la URL de la imagen
                    const imgElement = document.createElement('img');
                    imgElement.src = imageUrl;

                    // Agrega la imagen al documento HTML
                    document.body.appendChild(imgElement);
                })
                .catch(error => {
                    console.error(error);
                });
        });
    })
    .catch(error => {
        console.error(error);
    });
