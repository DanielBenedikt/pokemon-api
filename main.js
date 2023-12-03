
async function apiRequest() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon")
    const api = await response.json()
    // console.log(api)
    displayAll(api)
}

function displayAll(api) {
    const container = document.getElementById("container")
    let html = "<ul>";
    for(a of api.results) {
         html += `  
                    <li>${a.name}</li>
                    
                `      
    }
        html += "</ul> <hr>"
    container.innerHTML += html
    
}

async function searchPokemon(){
    const searchPokemon = document.getElementById("searchPokemon").value
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchPokemon}`)
    const api = await pokemon.json()
    console.log(api)
    showDetailsSearch(api)
}

function showDetailsSearch(api) {
    const showDetails = document.getElementById("showDetails")
    const typesArr = api.types.map(key => key.type.name)
    const abilitiesArr = api.abilities.map(key => key.ability.name)
    const movesArr = api.moves.map(key => key.move.name)
    const pokemonImage = api.sprites.other['official-artwork'].front_default
    let html = `<ul>
                <li>Name: ${api.forms[0].name}</li>
                <li>Type: ${typesArr.join(" , ")}</li>
                <li>Abilities: ${abilitiesArr.join(" , ")}</li>
                <li>Moves: ${movesArr.join(" , ")}</li>
                <li><img src="${pokemonImage}"></li>
                </ul>
                <hr>
            `
    showDetails.innerHTML += html   
}



// abilities.join("")
