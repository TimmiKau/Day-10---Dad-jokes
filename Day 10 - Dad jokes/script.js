const jokeEl = document.getElementById('joke')
const btn = document.getElementById('jokeBtn')

btn.addEventListener ('click', generateJoke)


//Using async
generateJoke()


async function generateJoke(){

const response = await fetch('https://icanhazdadjoke.com/' ,
{headers: {'Accept': 'application/json'}})

const data = await response.json()

jokeEl.innerHTML= data.joke


}



//Using .Then
/*
generateJoke()


function generateJoke(){

fetch('https://icanhazdadjoke.com/' ,
{headers: {'Accept': 'application/json'}})

.then(Response => Response.json())
.then(data => {jokeEl.innerHTML = data.joke})
}
*/

