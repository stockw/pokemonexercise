// let getPokemon = document.querySelector("pokemon")

let getPokemon = document.getElementById('getPokemon')
// console.log(getPokemon);

getPokemon.addEventListener("click", async () => {
//         fetch("http://localhost:5000/get_pokemon_data").then((response) => {
//         response.json().then((pokemon) => {
//             console.log(pokemon);
//         })
//     })
// })
    let response = await fetch("http://localhost:5000/get_pokemon_data")
    let finalData = await response.json()
    console.log(finalData);
})