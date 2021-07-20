import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCode} from "@fortawesome/free-solid-svg-icons";

function EachService({place, title, description}) {
    const boxColorClasses = (place === "odd") ? "border border-gray-300" : "border border-yellow-600 bg-yellow-600";

    const para1ColorClass = (place === "odd") ? "text-gray-900" : "text-white";

    const para2ColorClass = (place === "odd") ? "text-gray-500" : "text-white";

    const iconBoxClasses = (place === "odd") ? "text-white bg-yellow-600" : "text-yellow-600 bg-white shadow-top";

    return (
        <div className={`relative px-4 pt-12 pb-4 rounded-tr-3xl ${boxColorClasses}`} >
            <p className={`text-lg font-black ${para1ColorClass}`}>{title}</p>
            <p className={`text-sm ${para2ColorClass}`}>{description}</p>

            <div className={`absolute p-3 -top-4 left-4 rounded-md ${iconBoxClasses}`} >
                <FontAwesomeIcon className="h-6" icon={faCode} />
            </div>
        </div >
    );
}

export default EachService;

