import Skill from "./Skill";

function Expertise({skills}) {
    return (
        <div className="flex flex-col items-center p-[5%] bg-image">
            <p className="mb-2 text-lg font-medium text-center text-yellow-600">Why Chose Me</p>
            <p className="mb-10 text-3xl font-black text-center text-gray-900">My Expertise Area</p>
            <div className="w-full grid sm:grid-cols-2 sm:gap-x-[15%] gap-y-8">
                {skills.map((skill) => {
                    return <Skill key={skill.id} skill={skill} />
                })}
            </div>
        </div >
    );
}

export default Expertise;
