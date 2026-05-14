const ProjectCard = ({ title, description, tech, image, projectUrl, gitHub }) => {
    return (
        <div>
            <img src={image} alt={title} className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
            <p className="text-sm text-gray-500 mb-4">Tech Stack: {tech}</p>
            <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View Project</a>
            <a href={gitHub} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:underline ml-4">GitHub</a>
        </div>

    )
}
export default ProjectCard;