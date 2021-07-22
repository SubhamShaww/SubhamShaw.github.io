function Skill({skill}) {
    return (
        <div className="flex flex-col space-y-3">
            <p className="flex justify-between text-sm font-medium text-gray-900"><span>{skill.name}</span><span>{skill.value}%</span></p>
            <progress className="w-full text-yellow-600 bg-gray-900" value={skill.value} max={100} />
        </div>
    );
}

export default Skill;

