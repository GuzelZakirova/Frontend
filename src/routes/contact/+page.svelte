<section>
    <div class="body__contact" id="Contact">
        <div class="container">
            <h1 class="title">
                Contact Me
            </h1>
            <div class="contact-block">
                <div class="descript">
                    <div class="space"></div>
                    <div class="description">
                        <p class="description__text">
                            Get in touch via the contact form below and I'll come back to you as soon as
                            possible.
                        </p>
                    </div>
                </div>
                <div class="contact__surname-name">
                    <input type="text" class="block form" name="surname" id="surname"
                           placeholder="Surname..."/>
                    <input type="text" class="block form" name="name" id="name" placeholder="Name..."/>
                </div>
                <div class="contact__company-email">
                    <input type="text" class="block form" name="company" id="company"
                           placeholder="Company..."/>
                    <input type="text" class="block form" name="email" id="email"
                           placeholder="Email..."/>
                </div>
                <div class="button">
                    <button type="submit" class="submit">Submit</button>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    section {
        padding-top: 70px;
        font-size: 20px;
    }

    h1 {
        font-weight: bold;
    }

    .descript {
        display: flex;
    }

    .space {
        width: 50%;
    }

    .form {
        margin: 0 10px 10px 0;
        color: gray;
    }

    .block {
        width: 46%;
        padding-top: 20px;
        border-radius: 5px;
        border: 1px solid #000;
    }

    .button {
        text-align: right;
    }

    button:hover {
        background-color: #867f7f;
    }

    .submit {
        height: 40px;
        width: 80px;
        border-radius: 5px;
        border: 1px solid #000;
    }
</style>