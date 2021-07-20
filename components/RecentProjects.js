import Project from './Project';

function RecentProjects({projects}) {
    return (
        <div className="section-box section-bg-color">
            <p className="section-heading-1">My Portfolio</p>
            <p className="section-heading-2">Recent Projects</p>

            <div className="flex flex-col space-y-10 sm:flex-row sm:space-y-0 sm:space-x-10 sm:overflow-x-scroll">
                {projects?.map((project) => (
                    <Project
                        key={project.id}
                        image={project.image}
                        title={project.title}
                        website={project.website}
                        github={project.github}
                    />
                ))}
            </div>
        </div>
    );
}

export default RecentProjects;

