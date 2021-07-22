import QualificationCategory from './QualificationCategory';

function Qualification({qualification}) {
    return (
        <div className="section-box section-bg-color">
            <p className="section-heading-1">My Qualification</p>
            <p className="section-heading-2">Awesome Journey</p>

            <div className="used-grid-template-2">
                <QualificationCategory key={qualification.education.id} list={qualification.education.list} category="Education" />
                <QualificationCategory key={qualification.experience.id} list={qualification.experience.list} category="Experience" />
            </div>
        </div>
    );
}

export default Qualification;
