<section>
    <div class="body__about" id="About">
        <div class="container">
            <h1 class="title">About Me</h1>
            <p class="about__text">
                I'm Zakirova Guzel Rinatovna
                <br/>
                Date of birth - 26.06.2003
                <br/>
                Studied - Gymnasium 1 (Uray city)
                <br/>
                I'm studying now in Innopolis University
            </p>
        </div>
        <div class="comic">
            <div class="comic-button">
                <button id="get-comic" on:click={loadComic}>Get comix</button>
                {#if data.loading === true}
                    Loading Comic...
                {:else if data.title !== undefined}
                    <br>
                    <img src={data.image} alt="comic" />
                    <br>
                    {data.title}
                    <br>
                    {data.date}.{data.month}.{data.year}
                {/if}
            </div>
        </div>
    </div>
</section>

<script>
    let data = {
        image: undefined,
        title: undefined,
        date: undefined,
        month: undefined,
        year: undefined,
        loading: false,
    };

    async function loadComic() {
        data.loading = true;

        console.log('fetchID');

        const params1 = new URLSearchParams();
        const email = 'guz.zakirova@innopolis.university';
        params1.append('email', email);
        const comic_id_response = await fetch('https://fwd.innopolis.university/api/hw2?' + params1.toString());
        const comic_id = await comic_id_response.json();

        console.log(comic_id);

        const params2 = new URLSearchParams();
        params2.append('id', String(comic_id));
        const response = await fetch('https://fwd.innopolis.university/api/comic?' + params2.toString());
        const comicData = await response.json();

        console.log(comicData);

        data = {
            image: comicData.img,
            title: comicData.title,
            date: new window.Date().getDate(),
            month: new window.Date().getMonth(),
            year: new window.Date().getFullYear(),
            loading: false,
        };
    }
</script>

<style>
    section {
        padding-top: 70px;
        font-size: 20px;
    }

    h1 {
        font-weight: bold;
    }
</style>