import React from "react";
import "../../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faGithub,
    faCss3Alt,
    faReact,
    faJs,
    faHtml5,
    faPython,
} from "@fortawesome/free-brands-svg-icons";
import Projects from "./Projects";

const Home = () => {
    return (
        <>
        <section className="pt-16 pb-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-3">
                    <div className="flex-1 text-center lg:text-left">
                        <h1 className="text-3xl font-bold mb-4">Junior software developer</h1>

                        <div className="flex-1 flex justify-center lg:hidden mb-6">
                            <img
                                src="/docs/images/portfolio-image.jpg"
                                alt="Matthew Hughes"
                                className="w-44 h-44 rounded-md object-cover"
                            />
                        </div>

                        <p className="text-lg">
                            Hi my name is Matthew Hughes, I am a passionate front-end React developer based in
                            Southend-On-Sea England.
                        </p>

                        <ul className="mt-6 flex justify-center lg:justify-start gap-6 text-2xl lg:text-4xl">
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/matthew-hughes-37a3291b8/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn (opens in new tab)"
                                >
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </li>
                            <li>
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
                                <li><FontAwesomeIcon icon={faCss3Alt} /></li>
                                <li><FontAwesomeIcon icon={faReact} /></li>
                                <li><FontAwesomeIcon icon={faJs} /></li>
                                <li><FontAwesomeIcon icon={faHtml5} /></li>
                                <li><FontAwesomeIcon icon={faPython} /></li>
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
        <Projects/>
        </>
    );
};

export default Home;