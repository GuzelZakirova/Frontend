<script>
    import github from '$lib/images/github.png';
    import telegram from '$lib/images/telegram.png';
    import email from '$lib/images/email.png';
</script>

<footer>
    <div class="social">
        <a href="https://github.com/GuzelZakirova" class="social__link" target="_blank">
            <img src={github} alt="github" class="social__img" id="gh-link"/>
        </a>
        <a href="https://t.me/Guzel_Zakirova" class="social__link" target="_blank">
            <img src={telegram} alt="telegram" class="social__img" id="tg-link"/>
        </a>
        <a href="mailto:guz.zakirova@innopolis.university" class="social__link" id="email"
           target="_blank">
            <img src={email} alt="email" class="social__img" id="email-link"/>
        </a>
    </div>
</footer>

<style>
    .social {
        background-color: black;

    }

    .social__img {
        height: 25px;
        padding: 10px 5px;
    }
</style>