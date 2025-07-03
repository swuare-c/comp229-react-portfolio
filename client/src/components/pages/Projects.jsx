import './Projects.css';

const projects = [
    {
        title: 'Project One',
        description: 'This is a brief description of Project One.',
        image: '/placeholder.jpg',
        link: '',
    },
    {
        title: 'Project Two',
        description: 'This is a brief description of Project Two.',
        image: '/placeholder.jpg',
        link: '',
    },
    {
        title: 'Project Three',
        description: 'This is a brief description of Project Three.',
        image: '/placeholder.jpg',
        link: '',
    },
    {
        title: 'Project Four',
        description: 'This is a brief description of Project Four.',
        image: '/placeholder.jpg',
        link: '',
    }
];

const Projects = () => {
    return (
    <section className='projects-section'>
        <h1 className='projects-header'>My Projects</h1>
        <section className='projects-container'>
        {projects.map((project, index) => (
        <div className='project-card' key={index}>
            <img src={project.image} alt={project.title} />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} className='project-link' target='_blank'>View Project</a>
        </div>
        ))}
        </section>
    </section>)
}

export default Projects;