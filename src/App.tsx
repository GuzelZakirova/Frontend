import React from 'react';
import logo from './logo.svg';
import './App.css';
import './script.ts'
import {fetchComic} from "./script";

function App() {

    const fetchComic = async (): Promise<string> => {
        {
            console.log('fetchID');

            const params1 = new URLSearchParams();
            params1.append('email', 'guz.zakirova@innopolis.university');
            const comic_id = await fetch('https://fwd.innopolis.university/api/hw2?' + params1.toString())
                .then(r => r.json());
            console.log(comic_id);
            console.log('fetchComic');
            const params2 = new URLSearchParams();
            params2.append('id', String(comic_id));
            const comic = await fetch('https://fwd.innopolis.university/api/comic?' + params2.toString())
                .then(r => r.json());
            return comic.title;
        }
    }

    return (
        <>
            <header className="header">
                <div className="header__top">
                    <div className="header__logo">
                        <a href="" className="logo__link">
                            <img src={require('../src/content/images/logo.png')} className="logo" alt="Logo"/>
                        </a>
                    </div>
                    <nav className="header__nav">
                        <ul className="header__nav-list">
                            <li className="header__nav-item">
                                <a href="#Home" className="header__nav-link">Home</a>
                            </li>
                            <li className="header__nav-item">
                                <a href="#About" className="header__nav-link">About Me</a>
                            </li>
                            <li className="header__nav-item">
                                <a href="#Photos" className="header__nav-link">Photos</a>
                            </li>
                            <li className="header__nav-item">
                                <a href="#Portfolio" className="header__nav-link">Portfolio</a>
                            </li>
                            <li className="header__nav-item">
                                <a href="#Contact" className="header__nav-link">Contact Me</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            <main>
                <div className="body__home" id="Home">
                    <div className="container">
                        <div className="greeting">
                            <div className="main-photo block">
                                <img src={require('../src/content/images/main_photo.jpg')} className="base-photo" alt="Guzel Zakirova"/>
                            </div>
                            <div className="main-text block">
                                <div className="text">
                                    <h1 className="greeting__text">Hi, I'm Guzel</h1>
                                    <p className="greeting__paragraph">Hello everyone, I am a novice developer in the
                                        field of
                                        frontend.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="body__about" id="About">
                    <div className="container">
                        <h1 className="title">About Me</h1>
                        <p className="about__text">
                            I'm Zakirova Guzel Rinatovna
                            <br/>
                            Date of birth - 26.06.2003
                            <br/>
                            Studied - Gymnasium 1 (Uray city)
                            <br/>
                            I'm studying now in Innopolis University
                        </p>
                    </div>
                    <div className="comic">
                        <div className="comic-button">
                            <button id="get-comic" onClick={fetchComic}>Get comix</button>
                        </div>
                        <img src="" alt="comic" id="comic-img"/>
                        <p id="comic-title"></p>
                        <p id="comic-date"></p>
                    </div>
                </div>

                <div className="body__photos" id="Photos">
                    <div className="container">
                        <h1 className="title">
                            Photos
                        </h1>
                        <div className="photos grid-cols-2 md:grid-cols-3 gap">
                            <div className="photo">
                                <img src={require('../src/content/images/1.jpg')} alt=""/>
                            </div>
                            <div className="photo">
                                <img src={require('../src/content/images/2.jpg')} alt=""/>
                            </div>
                            <div className="photo">
                                <img src={require('../src/content/images/3.jpg')} alt=""/>
                            </div>
                        </div>
                        {/*<div>*/}
                        {/*    <a href="#" class="link"><h3>More photos ></h3></a>*/}
                        {/*</div> */}
                    </div>
                </div>

                <div className="body__portfolio" id="Portfolio">
                    <div className="container">
                        <h1 className="title">
                            Portfolio
                        </h1>
                        <div className="">
                            <ul className="portfolio__list">
                                <li className="portfolio__list-item">
                                    <p><a href="https://github.com/InnoSWP/innoTable"
                                          className="portfolio__list-item__project">InnoTable+</a> (participated as a
                                        frontend
                                        developer)</p>
                                </li>
                                <li className="portfolio__list-item">
                                    <p><a href="https://github.com/Tufra/backup-service"
                                          className="portfolio__list-item__project">Backup Service</a> (participated as
                                        a
                                        frontend developer)</p>
                                </li>
                            </ul>
                        </div>
                        {/*<div class="link">*/}
                        {/*    <a href="#" class="link"><h3>More ></h3></a>*/}
                        {/*</div>*/}
                    </div>
                </div>

                <div className="body__contact" id="Contact">
                    <div className="container">
                        <h1 className="title">
                            Contact Me
                        </h1>
                        <div className="contact-block">
                            <div className="descript">
                                <div className="space"></div>
                                <div className="description">
                                    <p className="description__text">
                                        Get in touch via the contact form below and I'll come back to you as soon as
                                        possible.
                                    </p>
                                </div>
                            </div>
                            <div className="contact__surname-name">
                                <input type="text" className="block form" name="surname" id="surname"
                                       placeholder="Surname..."/>
                                <input type="text" className="block form" name="name" id="name" placeholder="Name..."/>
                            </div>
                            <div className="contact__company-email">
                                <input type="text" className="block form" name="company" id="company"
                                       placeholder="Company..."/>
                                <input type="text" className="block form" name="email" id="email"
                                       placeholder="Email..."/>
                            </div>
                            <div className="button">
                                <button type="submit" className="submit">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <footer>
                <div className="social">
                    <a href="https://github.com/GuzelZakirova" className="social__link" target="_blank">
                        <img src={require('../src/content/images/github.png')} alt="" className="social__img" id="gh-link"/>
                    </a>
                    <a href="https://t.me/Guzel_Zakirova" className="social__link" target="_blank">
                        <img src={require('../src/content/images/telegram.png')} alt="" className="social__img" id="tg-link"/>
                    </a>
                    <a href="mailto:guz.zakirova@innopolis.university" className="social__link" id="email"
                       target="_blank">
                        <img src={require('../src/content/images/email.png')} alt="" className="social__img" id="email-link"/>
                    </a>
                </div>
            </footer>
        </>
        // <div className="App">
        //   <header className="App-header">
        //     <img src={logo} className="App-logo" alt="logo" />
        //     <p>
        //       Edit <code>src/App.tsx</code> and save to reload.
        //     </p>
        //     <a
        //       className="App-link"
        //       href="https://reactjs.org"
        //       target="_blank"
        //       rel="noopener noreferrer"
        //     >
        //       Learn React
        //     </a>
        //   </header>
        // </div>
    );
}

export default App;
