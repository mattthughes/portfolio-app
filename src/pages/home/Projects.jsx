import React from "react";
import "../../index.css";
import ProjectCard from "../../components/ProjectCard";

const Projects = () => {
    return (
        <section id="projects" className="pt-20 md:pt-32 min-h-[75vh]">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-2xl font-bold mb-4">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <ProjectCard 
                        title="Souls Like Gallery" 
                        description="Souls Like Gallery is a content sharing application built using a frontend libary called React along with a backend framework called Djanjo Restframework this application will allow users to share there favourite experiences and moments from the souls like genre users will be able to create, read, update and delete records on the application. This is the Frontend development pipeline which showcases how this application was made."
                        tech="React, PostgreSQL, Django Rest Framework, CSS, Bootstrap" 
                        image="/docs/images/souls-like-gallery.png" 
                        projectUrl="https://souls-like-gallery-03103574fc28.herokuapp.com/" 
                        gitHub="https://github.com/mattthughes/souls-like-gallery-app"
                    />
                    <ProjectCard 
                        title="Holiday Entitlement Calculator" 
                        description="An entitlement calculator to calculate remaining holiday" 
                        tech="React" 
                        image="/docs/images/holiday-entitlement.png" 
                        projectUrl="https://entitlement-calculator.vercel.app/"
                        gitHub="https://github.com/mattthughes/entitlement_calculator"
                    />
                    <ProjectCard 
                        title="Last Trophy" 
                        description="Last trophy is a web application that allows Trophy hunting this application will allow users to view achievement guides, create an account, comment, rate other guides."
                        tech="Django, CSS, Bootstrap, PostgreSQL" 
                        image="/docs/images/last-trophy.png" 
                        projectUrl="https://last-trophy-f32c1bd6dcec.herokuapp.com/"
                        gitHub="https://github.com/mattthughes/Last-Trophy"
                    />
                </div>
            </div>
        </section>
    )
}

export default Projects