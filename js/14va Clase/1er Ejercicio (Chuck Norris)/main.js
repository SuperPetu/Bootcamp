document.getElementById('apiButton').addEventListener('click', ()=> {
    fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(data => {
            document.getElementById('responseContainer').innerText = data.value;
        })
});
