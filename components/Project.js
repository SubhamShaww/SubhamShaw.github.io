import Image from "next/image";
import { ExternalLinkIcon, GlobeAltIcon } from "@heroicons/react/outline";

function Project({ image = "", title = "", website = "", github = "" }) {
    return (
        <div className="flex flex-col space-y-10 justify-center bg-gray-100 border border-gray-200 p-[5%] sm:transition sm:transform sm:hover:scale-110">
            {/* top */}
            <Image
                loading="lazy"
                src={image}
                width={300}
                height={200}
                objectFit="cover"
            />

            {/* bottom */}
            <div className="flex flex-col">
                <p className="font-medium text-xl text-gray-900 text-center">
                    {title}
                </p>

                <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:space-x-5 mt-6">
                    <a
                        href={website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn w-full sm:w-min"
                    >
                        <div className="flex space-x-2 justify-center items-center">
                            <GlobeAltIcon className="h-6" />
                            <p>Website</p>
                        </div>
                    </a>

                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn w-full sm:w-min"
                    >
                        <div className="flex space-x-2 justify-center items-center">
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
