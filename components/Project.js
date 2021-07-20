import Image from "next/image";
import {ExternalLinkIcon, GlobeAltIcon} from "@heroicons/react/outline";

function Project({image = "", title = "", website = "", github = ""}) {
    return (
        <div className="flex flex-col space-y-10 justify-center bg-gray-100 border border-gray-200 p-[5%] sm:transition sm:transform sm:hover:scale-110">
            {/* top */}
            <Image src={image} width={300} height={200} />

            {/* bottom */}
            <div className="flex flex-col">
                <p className="text-xl font-medium text-center text-gray-900">
                    {title}
                </p>

                <div className="flex flex-col mt-6 space-y-3 sm:space-y-0 sm:flex-row sm:space-x-5">
                    <a
                        href={website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full btn sm:w-min"
                    >
                        <div className="flex items-center justify-center space-x-2">
                            <GlobeAltIcon className="h-6" />
                            <p>Website</p>
                        </div>
                    </a>

                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full btn-2 sm:w-min"
                    >
                        <div className="flex items-center justify-center space-x-2">
                            <ExternalLinkIcon className="h-6" />
                            <p>Github</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Project;
