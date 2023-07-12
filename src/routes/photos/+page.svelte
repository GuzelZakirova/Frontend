<script>
    import photo1 from "../../lib/images/1.jpg";
    import photo2 from "../../lib/images/2.jpg";
    import photo3 from "../../lib/images/3.jpg";
</script>

<section>
    <div class="body__photos" id="Photos">
        <div class="container">
            <h1 class="title">
                Photos
            </h1>
            <div class="photos grid-cols-2 md:grid-cols-3 gap">
                <div class="photo">
                    <img src={photo1} alt="photo1"/>
                </div>
                <div class="photo">
                    <img src={photo2} alt="photo2"/>
                </div>
                <div class="photo">
                    <img src={photo3} alt="photo3"/>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    section {
        padding-top: 70px;
    }

    h1 {
        font-weight: bold;
    }

    .photos {
        padding: 20px 0;
        display: grid;
    }

    .md\:grid-cols-3 {
        grid-template-columns: repeat(3, minmax(0,1fr));
    }

    .photo {
        padding: 0 5px;
    }

    img {
        width: 90%;
    }

    .gap {
        gap: 0.125rem;
    }
</style>