const getComic = document.getElementById('get-comic');
const comic_title = document.getElementById('comic-title');
const comic_date = document.getElementById('comic-date');
const date = new Date();

function fetchID (email) {
    const params = new URLSearchParams();
    params.append('email', email);
    return fetch('https://fwd.innopolis.university/api/hw2?' + params.toString())
    .then(r => r.json());
}


function fetchComic (comic_id) {
    const params = new URLSearchParams();
    params.append('id', comic_id);
    return fetch('https://fwd.innopolis.university/api/comic?' + params.toString())
                .then(r => r.json());
}

getComic.addEventListener('click', async function (e) {
    const comic_id = await fetchID('guz.zakirova@innopolis.university');
    const comic = await fetchComic(comic_id);
    document.getElementById('comic-img').src = comic.img;
    comic_title.textContent = comic.title;
    comic_date.textContent = date.toLocaleDateString(comic);
});