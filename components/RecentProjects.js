import Project from './Project';

function RecentProjects({projects}) {
    return (
        <div>
            <p className="mt-12 mb-10 text-3xl font-black text-center text-gray-900 sm:mb-0">
                Recent Projects
            </p>
            <div className="flex flex-col space-y-10 p-[5%] sm:flex-row sm:space-y-0 sm:space-x-10  sm:overflow-x-scroll sm:mx-[5%]">
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

