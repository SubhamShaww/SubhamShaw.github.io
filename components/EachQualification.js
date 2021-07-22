import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarWeek} from "@fortawesome/free-solid-svg-icons";

function EachQualification({name, type, startYear, endYear}) {
    return (
        <div className="timeline space-y-3">
            <div className="space-y-1">
                <p className="text-sm font-black text-gray-900">{name}</p>
                <p className="text-xs text-gray-900">{type}</p>
            </div>
            <p className="flex text-xs text-yellow-600 space-x-2">
                <FontAwesomeIcon className="h-3" icon={faCalendarWeek} />
                <span>{startYear}-{endYear}</span>
            </p>
        </div>
    )
}

export default EachQualification;

