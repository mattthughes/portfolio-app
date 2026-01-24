import React from 'react'
import '../../index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faCss3Alt, faReact, faJs, faHtml5, faPython } from '@fortawesome/free-brands-svg-icons'

const Home = () => {
    return (
        <>
            <section>
                <div className="flex justify-center pt-20">
                    <img className="w-44 h-44 lg:w-44 lg:h-44 rounded-md" src="/docs/images/portfolio-image.jpg" />
                </div>
                <div className="flex">
                    <div className="flex-1 text-center">
                        <h1 className="">Junior software developer</h1>
                        <p className="">Hi my name is Matthew Hughes, I am a passionate front-end React developer based in Southend-On-Sea England. </p>
                    </div>
                </div>
            </section>
            <section>
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
            </section>

        <section>
            <ul className="flex justify-center text-xl lg:text-4xl">
                <li><FontAwesomeIcon icon={faCss3Alt} /></li>
                <li><FontAwesomeIcon icon={faReact} /></li>
                <li><FontAwesomeIcon icon={faJs} /></li>
                <li><FontAwesomeIcon icon={faHtml5} /></li>
                <li><FontAwesomeIcon icon={faPython} /></li>
            </ul>
        </section>

        </>

    )
}

export default Home

