const getComic = document.getElementById('get-comic') as HTMLFormElement;
const comic_title = document.getElementById('comic-title') as HTMLFormElement;
const comic_date = document.getElementById('comic-date') as HTMLFormElement;
const date = new Date();

export function fetchID (email: string) {
    console.log('fetchID');
    const params = new URLSearchParams();
    params.append('email', email);
    return fetch('https://fwd.innopolis.university/api/hw2?' + params.toString())
        .then(r => r.json());
}

export function fetchComic (email: string) {{
    console.log('fetchID');
    const params1 = new URLSearchParams();
    params1.append('email', email);
    const comic_id = fetch('https://fwd.innopolis.university/api/hw2?' + params1.toString())
        .then(r => r.json());
    const params2 = new URLSearchParams();
    params2.append('id', String(comic_id));
    return fetch('https://fwd.innopolis.university/api/comic?' + params2.toString())
        .then(r => r.json());
}}

// export function fetchComic (comic_id: string) {
//     console.log('fetchComic');
//     const params = new URLSearchParams();
//     const comic = await fetchID('guz.zakirova@innopolis.university');
//
//     params.append('id', comic_id);
//     return fetch('https://fwd.innopolis.university/api/comic?' + params.toString())
//         .then(r => r.json());
// }

// if (getComic) {
//     getComic.addEventListener('click', async function (e) {
//         console.log('Click');
//         const comic_id = await fetchID('guz.zakirova@innopolis.university');
//         const comic = await fetchComic(comic_id);
//         const imgs = document.getElementById('comic-img') as HTMLImageElement;
//         imgs.src = comic.img;
//         comic_title.textContent = comic.title;
//         comic_date.textContent = date.toLocaleDateString(comic);
//     });
// }
