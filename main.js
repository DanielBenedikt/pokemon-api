
async function apiRequest() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon")
    const api = await response.json()
    // console.log(api)
    displayAll(api)
}

function displayAll(api) {
    let container = document.getElementById("container")
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
    let showDetails = document.getElementById("showDetails")
    let html = `<ul>
                <li>${api.forms[0].name}</li>
                <li>${api.types[0].type.name}</li>
                <li>${api.abilities[0].ability.name}</li>
                <li>${api.abilities[1].ability.name}</li>
                </ul>
            `
    showDetails.innerHTML += html   
}



// abilities.join("")
