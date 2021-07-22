import Image from "next/image";
import {ExternalLinkIcon, GlobeAltIcon} from "@heroicons/react/outline";

function Project({image = "", title = "", website = "", github = ""}) {
    return (
        <div className="used-flex-template">
            {/* top */}
            <Image src={image} layout="responsive" width={300} height={200} />

            {/* bottom */}
            <div className="used-flex-template-2">
                <p className="text-center details-title">
                    {title}
                </p>

                <div className="btns-grid-template-2">
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
