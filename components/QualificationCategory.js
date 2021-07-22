import {faGraduationCap, faBriefcase} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import EachQualification from "./EachQualification";

function QualificationCategory({list, category}) {
    return (
        <div className="used-flex-template">
            <p className="flex text-xl font-medium text-gray-900 space-x-2">
                <FontAwesomeIcon className="h-6" icon={category === 'Education' ? faGraduationCap : faBriefcase} />
                <span>{category}</span>
            </p>

            <div className="space-y-6">
                {list.map((each) => (
                    <EachQualification key={each.id} name={each.name} type={each.type} startYear={each.startYear} endYear={each.endYear} />
                ))}
            </div>
        </div>
    )
}

export default QualificationCategory

