import React from "react";
import "../../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faGithub,
    faCss3Alt,
    faReact,
    faJs,
} from "@fortawesome/free-brands-svg-icons";
import Projects from "./Projects";
import About from "./About";
import Button from "../../components/Button";
import Aurora from "../../components/Aurora";

const Home = () => {
    return (
        <>
            <section className="pt-10 pb-20 md:pt-32" id="home">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-3">
                        <div className="flex-1 text-center lg:text-left">
                            <h1 className="text-3xl font-bold mb-4">Fullstack software developer</h1>

                            <div className="relative mx-auto overflow-hidden w-[190px] h-[190px] flex justify-center items-center lg:hidden mb-6">
                                <Aurora
                                colorStops={['#60a5fa', '#a78bfa', '#f0abfc']}
                                amplitude={1.0}
                                blend={0.5}
                                speed={0.5}
                                />
                                <img
                                    src="/docs/images/portfolio-image.jpg"
                                    alt="Matthew Hughes"
                                    className="absolute z-10 w-36 h-36 rounded-md object-cover"
                                />
                                
                            </div>

                            <p className="text-lg">
                                Hi my name is Matthew Hughes, I am a Fullstack software developer based in
                                Southend-On-Sea England.
                            </p>
                            <div className="pt-4 flex flex-col items-center justify-center lg:items-start lg:justify-start lg:flex-row gap-4">
                                <Button href="#projects" variant="primary">View Projects</Button>
                                <Button href="#contact" variant="secondary">Contact Me</Button>
                            </div>

                            <ul className="mt-6 flex justify-center lg:justify-start gap-6 text-2xl lg:text-4xl">
                                <li className="hover:bg-gray-100 hover:text-blue-600 cursor-pointer">
                                    <a
                                        href="https://www.linkedin.com/in/matthew-hughes-37a3291b8/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="LinkedIn (opens in new tab)"
                                    >
                                        <FontAwesomeIcon icon={faLinkedin} />
                                    </a>
                                </li>
                                <li className="hover:bg-gray-100 hover:text-purple-600 cursor-pointer">
                                    <a
                                        href="https://github.com/mattthughes"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="GitHub (opens in new tab)"
                                    >
                                        <FontAwesomeIcon icon={faGithub} />
                                    </a>
                                </li>
                            </ul>

                            <div className="mt-8">
                                <h3 className="text-center lg:text-left">Techstack</h3>
                                <ul className="mt-3 flex justify-center lg:justify-start gap-6 text-2xl lg:text-4xl">
                                    <li className="hover:bg-gray-100 hover:text-red-600 cursor-pointer"><FontAwesomeIcon icon={faCss3Alt} /></li>
                                    <li className="hover:bg-gray-100 hover:text-blue-600 cursor-pointer"><FontAwesomeIcon icon={faReact} /></li>
                                    <li className="hover:bg-gray-100 hover:text-yellow-600 cursor-pointer"><FontAwesomeIcon icon={faJs} /></li>
                                </ul>
                            </div>
                        </div>
                        <div className=" hidden lg:flex flex-1 lg:justify-start lg:pr-8 xl:pr-16">
                            <img
                                src="/docs/images/portfolio-image.jpg"
                                alt="Matthew Hughes"
                                className="w-44 h-44 md:w-52 md:h-52 mx-auto lg:mx-0 rounded-md object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <About/>
            <Projects />
            <footer className="bg-gray-800 text-white py-6 mt-12">
                <div className="max-w-7xl mx-auto px-4">
                    <p className="text-center">
                        &copy; {new Date().getFullYear()} Matthew Hughes. All rights reserved.
                    </p>
                </div>
            </footer>
        </>
    );
};

export default Home;