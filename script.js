const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

generateJoke();

jokeBtn.addEventListener('click', generateJoke);

async function generateJoke() {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    const res = await fetch('https://icanhazdadjoke.com/', config);
    jokeEl.innerText = (await res.json()).joke;
}