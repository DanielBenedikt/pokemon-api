async function apiRequest() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon")
    const api = await response.json()
    console.log(api)
    displayAll(api)
}
function displayAll(api) {
    let container = document.getElementById("container")
    let html = "";
    for(a of api) {
         html += `  <ul>
                    <li>${a.name}</li>
                    </ul>
                `      
    }
    container.innerHTML += html
    
}