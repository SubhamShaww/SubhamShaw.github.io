import Image from "next/image";
import {DocumentDownloadIcon, IdentificationIcon} from "@heroicons/react/outline";

function Intro({picture, resume, designation}) {
    return (
        <div className="intro-box">
            {/* left */}
            <Image
                src={picture}
                height={260}
                width={260}
                layout="responsive"
                objectFit="cover"
                className="rounded-full"
            />

            {/* right */}
            <div className="flex flex-col space-y-6">
                {/* top */}
                <div className="space-y-2">
                    <p className="text-lg font-medium text-yellow-600">
                        Hi, I am
                    </p>
                    <p className="text-5xl font-black text-indigo-900">
                        Subham Shaw
                    </p>
                    <p className="text-lg font-medium text-gray-900">
                        {designation}
                    </p>
                </div>

                {/* bottom */}
                <div className="btns-grid-template">
                    <a
                        href={resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full btn sm:w-auto"
                    >
                        <div className="flex justify-center space-x-2">
                            <DocumentDownloadIcon className="h-6" />
                            <p>Resume</p>
                        </div>
                    </a>
                    <a
                        href="#contact"
                        className="w-full btn-2 sm:w-auto"
                    >
                        <div className="flex justify-center space-x-2">
                            <IdentificationIcon className="h-6" />
                            <p>Contact</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Intro;
