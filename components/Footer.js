import { MailIcon } from "@heroicons/react/outline";

function Footer({ gmail, linkedin, github }) {
    return (
        <div className="bg-gray-900 flex items-center px-[5%] py-5 text-sm sticky">
            {/* left */}
            <p className="flex-grow text-gray-100 font-semibold text-lg sm:text-xl">
                GET IN TOUCH
            </p>

            {/* right */}
            <div className="flex items-center space-x-4">
                <a
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-contact w-full sm:w-min"
                >
                    LinkedIn
                </a>

                <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-contact w-full sm:w-min"
                >
                    Github
                </a>

                <a
                    href={`mailto:${gmail}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-contact w-full sm:w-min"
                >
                    <MailIcon className="h-6" />
                </a>
            </div>
        </div>
    );
}

export default Footer;
