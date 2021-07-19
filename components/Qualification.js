import QualificationCategory from './QualificationCategory';

function Qualification({qualification}) {
    return (
        <div className="section-box bg-blue-50">
            <p className="section-heading-1">My Qualification</p>
            <p className="section-heading-2">Awesome Journey</p>

            <div className="w-full justify-center grid grid-rows-2 gap-y-14 sm:grid-cols-2 sm:grid-rows-none sm:gap-x-[15%]">
                <QualificationCategory key={qualification.education.id} list={qualification.education.list} category="Education" />
                <QualificationCategory key={qualification.experience.id} list={qualification.experience.list} category="Experience" />
            </div>
        </div>
    );
}

export default Qualification;
