import {useEffect, useState} from 'react';
import Project from './Project';
import {ArrowCircleLeftIcon, ArrowCircleRightIcon} from "@heroicons/react/outline";

function RecentProjects({projects}) {
    const [current, setCurrent] = useState(0);
    const length = projects.length;

    if (!Array.isArray(projects) || projects.length <= 0) {
        return null;
    }

    function prevSlide() {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    function nextSlide() {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    useEffect(() => {
        while (length > 1) {
            setInterval(nextSlide, 2000);
        }
    }, []);

    return (
        <div className="section-box section-bg-color">
            <p className="section-heading-1">My Portfolio</p>
            <p className="section-heading-2">Recent Projects</p>

            <div className="slider">
                {projects?.map((project, index) => (
                    <div key={project.id} className={index === current ? 'slide active' : 'slide'}>
                        {
                            index === current &&
                            <Project
                                key={project.id}
                                image={project.image}
                                title={project.title}
                                website={project.website}
                                github={project.github}
                            />
                        }
                    </div>

                ))}
                <ArrowCircleLeftIcon className="left-slider-btn" onClick={prevSlide} />
                <ArrowCircleRightIcon className="right-slider-btn" onClick={nextSlide} />
            </div>
        </div>
    );
}

export default RecentProjects;

