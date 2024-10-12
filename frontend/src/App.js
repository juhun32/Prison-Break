import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';
import './App.css';

const App = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await axios.get('http://127.0.0.1:8000/api/posts/');
            setPosts(response.data);
        };
        fetchPosts();
    }, []);

    return (
        <div className="App">
            <Header />
            <main>
                {/* <section>
                    <h2>Posts</h2>
                    <ul>
                        {posts.map(post => (
                            <li key={post.id}>
                                <h3>{post.title}</h3>
                                <p>{post.content}</p>
                            </li>
                        ))}
                    </ul>
                </section> */}
                <section class="intro" id="home">
                    <h1 class="section__title section__title--intro">
                        Storm into Safety!
                    </h1>
                    <p class="section__subtitle section__subtitle--intro">
                        At Storm Hunter we help educate, guide, and bring awareness to those affected by natural disasters.
                    </p>
                    <img src="./img/storm.png" alt="storm image" class="intro__img" />
                </section>

                <section class="my-academics" id="academics">
                    <h2 class="section__title section__title--academics">My Academics</h2>
                    <div class="academics">
                        <div class="academic">
                            <h3>Databases</h3>
                            <p class="academic--1">
                                database management systems, SQL, and database design
                            </p>

                            <h3>Soft Skills</h3>
                            <p>Problem-Solving, Communication, Time-management</p>
                        </div>

                        <div class="academic">
                            <h3>Programming Languages</h3>
                            <p>Python, Java, C++, and JavaScript</p>
                        </div>

                        <div class="academic">
                            <h3>Extracurricular Activities</h3>
                            <p class="academic--1">
                                Hackathons and Coding Competitions, Clubs and Organizations
                            </p>

                            <h3>Cybersecurity</h3>
                            <p>
                                Principles of secure coding, cryptography, network security, and
                                ethical hacking
                            </p>
                        </div>
                    </div>

                    <a href="#projects" class="btn">Projects</a>
                </section>

                <section class="about" id="about">
                    <h2 class="section__title section__title--about">About</h2>
                    <p class="seciton__subtitle section__subtitle--about">
                        Full-stack developer based out of DMV area
                    </p>

                    <div class="about__body">
                        <h3 class="about__body--title">Who am I?</h3>
                        <p>
                            Hello there! My name is Whiskers, and I'm a sleek, agile cat with a
                            love for exploring and napping in cozy spots. I have soft, glossy fur
                            that I groom meticulously, and my eyes gleam with curiosity and
                            mischief. I live with a human who adores me and spoils me with treats
                            and affection.
                        </p>
                        <p>
                            Life as a cat is a blend of leisure and adventure. I cherish the quiet
                            moments just as much as the playful ones. And above all, I enjoy the
                            companionship of my human, who makes my life cozy and filled with
                            love. So, here's to another day of being a cat - living life on my own
                            terms and loving every minute of it.
                        </p>
                    </div>
                    <img src="img/cat6.png" alt="about image" class="about__img" />
                </section>

                <section class="projects" id="projects">
                    <h2 class="section__title section__title--projects">Projects</h2>
                    <p class="section__subtitle"></p>

                    <div class="portfolio">
                        <a href="./portfolio-item.html" class="portfolio__item">
                            <img
                                src="img/cat3.png"
                                alt="portfolio img 1"
                                class="portfolio__img"
                            />
                        </a>
                        <a href="./portfolio-item.html" class="portfolio__item">
                            <img
                                src="img/cat4.png"
                                alt="portfolio img 2"
                                class="portfolio__img"
                            />
                        </a>
                        <a href="./portfolio-item.html" class="portfolio__item">
                            <img
                                src="img/cat5.png"
                                alt="portfolio img 3"
                                class="portfolio__img"
                            />
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default App;
