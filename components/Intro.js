import Image from "next/image";
import { DocumentDownloadIcon } from "@heroicons/react/outline";

function Intro({ picture, resume }) {
    return (
        <div className="flex flex-col items-center p-[5%] space-y-10 sm:space-y-0 sm:flex-row justify-center sm:space-x-[15%] bg-gray-100">
            {/* left */}
            <Image
                src={picture}
                height={300}
                width={300}
                className="rounded-full"
            />

            {/* right */}
            <div className="flex flex-col items-center sm:items-start">
                {/* top */}
                <div className="space-y-2 text-center sm:text-left">
                    <p className="text-lg font-medium text-yellow-600">
                        Hi, I am
                    </p>
                    <p className="text-5xl font-black text-indigo-900">
                        Subham Shaw
                    </p>
                    <p className="text-lg font-medium text-gray-900">
                        Software Engineer
                    </p>
                </div>

                {/* bottom */}
                <a
                    href={resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn w-full sm:w-min mt-6"
                >
                    <div className="flex space-x-2 justify-center items-center">
                        <DocumentDownloadIcon className="h-6" />
                        <p>Resume</p>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default Intro;
