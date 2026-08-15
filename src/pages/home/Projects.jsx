import React from "react";
import "../../index.css";
import ProjectCard from "../../components/ProjectCard";

const Projects = () => {
    return (
        <section id="projects" className="pt-12 pb-16">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-2xl font-bold mb-4">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <ProjectCard
                        title="Souls Like Gallery"
                        description="Souls Like Gallery is a full-stack web application where users can create an account, share posts and interact with other members of the community. This project taught me how to build my own REST API — backed by unit tests — connect a React frontend to a Django backend, and implement authentication and CRUD functionality."
                        tech="React, PostgreSQL, Django Rest Framework, CSS, Bootstrap"
                        image="/docs/images/souls-like-gallery.png"
                        projectUrl="https://souls-like-gallery-03103574fc28.herokuapp.com/"
                        gitHub="https://github.com/mattthughes/souls-like-gallery-app"
                    />
                    <ProjectCard
                        title='Holiday Availability Tracker'
                        description='Holiday Availability Tracker is a calendar-based web application that shows team holiday availability at a glance, using colour-coded day states to flag available, limited and unavailable dates. Selecting a day reveals a detailed breakdown — remaining allowance, booked days, holiday limits and employee approval status — with real dates and month navigation built in. Currently working from local data, with API integration planned as a next step.'
                        tech='React, JavaScript, TailWind CSS'
                        image='/docs/images/holiday-tracker.png'
                        projectUrl='https://holiday-tracker-navy.vercel.app/'
                        gitHub='https://github.com/mattthughes/holiday-tracker'
                    />
                    <ProjectCard
                        title="Holiday Entitlement Calculator"
                        description="A React application that calculates employees' remaining holiday entitlement based on their contracted hours and working pattern. Building this project helped me improve my understanding of business logic, validation and writing calculations that reflect real business rules. "
                        tech="React, Bootstrap"
                        image="/docs/images/holiday-entitlement.png"
                        projectUrl="https://entitlement-calculator.vercel.app/"
                        gitHub="https://github.com/mattthughes/entitlement_calculator"
                    />

                    <ProjectCard
                        title="Last Trophy"
                        description="Last Trophy is a Django web application for trophy hunters to discover and share achievement guides, with a server-rendered Django/Bootstrap frontend. Building it taught me how to design a PostgreSQL database, retrieve and structure data from it, and display that information dynamically — without relying on a separate front-end framework."
                        tech="Django, CSS, Bootstrap, PostgreSQL"
                        image="/docs/images/last-trophy.png"
                        projectUrl="https://last-trophy-f32c1bd6dcec.herokuapp.com/"
                        gitHub="https://github.com/mattthughes/Last-Trophy"
                    />
                    <ProjectCard
                        title="Tech Buddy — 2nd Place, Hackathon"
                        description="Tech Buddy is an AI-powered web application developed during a hackathon to help users with common technology-related questions, where our team placed 2nd overall. The application uses the OpenAI API to generate responses and was built as part of a team using GitHub and pull requests, giving me valuable experience working collaboratively on a shared codebase under time pressure."
                        tech="OpenAI, Django, CSS, Bootstrap"
                        image="/docs/images/tech-buddy-live-demo.png"
                        projectUrl="https://support-squad-tech-buddy-9d4a4ad47301.herokuapp.com/"
                        gitHub="https://github.com/mattthughes/tech_buddy"

                    />
                </div>
            </div>
        </section>
    )
}

export default Projects