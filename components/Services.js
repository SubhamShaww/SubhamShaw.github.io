import EachService from './EachService';

function Services() {
    return (
        <div className="section-box bg-image">
            <p className="section-heading-1">Specialized In</p>
            <p className="section-heading-2">What I Offer</p>

            <div className="used-grid-template-2">
                <EachService place="odd" title="Frontend Development" description="It includes frontend or UI/UX related work for websites" />
                <EachService place="even" title="Backend Development" description="It includes backend work for websites like API and Databases related work" />
            </div>
        </div>
    );
}

export default Services;

