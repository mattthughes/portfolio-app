import React from 'react'
import '../../index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faCss3Alt, faReact, faJs, faHtml5, faPython } from '@fortawesome/free-brands-svg-icons'

const Home = () => {
    return (
        <>
            <section className="lg:pt-4 flex items-center justify-between">
                <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center lg:items-start pt-20 md:pt-32">

                    {/* TEXT */}
                    <div className="flex-1 text-center lg:text-left">
                        <h1 className="text-3xl font-bold mb-4">
                            Junior software developer
                        </h1>
                        <p className="text-lg">
                            Hi my name is Matthew Hughes, I am a passionate front-end React developer based in Southend-On-Sea England.
                        </p>
                    </div>

                    {/* IMAGE */}
                    <div className="flex-1 flex justify-center lg:justify-end lg:-ml-60">
                        <img
                            src="/docs/images/portfolio-image.jpg"
                            alt="Matthew Hughes"
                            className="w-44 h-44 rounded-md object-cover"
                        />
                    </div>

                </div>
            </section>

            <section className="flex items-center">
                <div className="pt-8">
                    <ul className="flex justify-center p-1 text-xl lg:text-4xl">
                    <li>
                        <a href="https://www.linkedin.com/in/matthew-hughes-37a3291b8/" target="_blank" rel="noopener"
                            aria-label="Find us on Youtube by clicking the Youtube icon (link opens in new tab)">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/mattthughes" target="_blank" rel="noopener"
                            aria-label="Find us on Facebook by clicking the Facebook icon (link opens in new tab)">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </li>
                </ul>
                </div>
                
            </section>

            <section>
                <div>
                     <h3 className="text-center">Techstack</h3>
                <ul className="flex justify-center text-xl lg:text-4xl">
                    <li><FontAwesomeIcon icon={faCss3Alt} /></li>
                    <li><FontAwesomeIcon icon={faReact} /></li>
                    <li><FontAwesomeIcon icon={faJs} /></li>
                    <li><FontAwesomeIcon icon={faHtml5} /></li>
                    <li><FontAwesomeIcon icon={faPython} /></li>
                </ul>
                </div>
               
            </section>

        </>

    )
}

export default Home

