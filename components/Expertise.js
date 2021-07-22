import Skill from "./Skill";

function Expertise({skills}) {
    return (
        <div className="section-box bg-image">
            <p className="section-heading-1">Why Chose Me</p>
            <p className="section-heading-2">My Expertise Area</p>
            <div className="used-grid-template-1">
                {skills.map((skill) => {
                    return <Skill key={skill.id} skill={skill} />
                })}
            </div>
        </div >
    );
}

export default Expertise;
