import {useEffect, useRef, useState} from 'react';
import Project from './Project';
import {ArrowCircleLeftIcon, ArrowCircleRightIcon} from "@heroicons/react/solid";

function RecentProjects({projects}) {
    const [current, setCurrent] = useState(0);
    const length = projects.length;
    const autoPlayRef = useRef(null);

    let startingX, movingX;

    function touchStart(e) {
        startingX = e.touches[0].clientX;
    }

    function touchMove(e) {
        movingX = e.touches[0].clientX;
    }

    function touchEnd() {
        if (startingX + 100 < movingX) {
            //console.log('swipe right');
            prevSlide();

        } else if (startingX - 100 > movingX) {
            //console.log('swipe left');
            nextSlide();
        }
    }

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
        autoPlayRef.current = nextSlide;
    });

    useEffect(() => {
        const interval = setInterval(() => {
            autoPlayRef.current();
        }, 4000);

        return () => clearInterval(interval);
    });

    return (
        <div className="section-box section-bg-color">
            <p className="section-heading-1">My Portfolio</p>
            <p className="section-heading-2">Recent Projects</p>

            <div className="slider" onTouchStart={touchStart} onTouchMove={touchMove} onTouchEnd={touchEnd}>
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

