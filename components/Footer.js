import { MailIcon } from "@heroicons/react/outline";

function Footer() {
    return (
        <div className="bg-gray-900 flex items-center px-[5%] py-5 text-sm sticky">
            {/* left */}
            <p className="flex-grow text-gray-100 font-semibold text-lg sm:text-xl">
                GET IN TOUCH
            </p>

            {/* right */}
            <div className="flex items-center space-x-4">
                <button className="btn-contact w-full sm:w-min">
                    <p>Github</p>
                </button>

                <button className="btn-contact w-full sm:w-min">
                    <p>LinkedIn</p>
                </button>

                <button className="btn-contact w-full sm:w-min">
                    <MailIcon className="h-6" />
                </button>
            </div>
        </div>
    );
}

export default Footer;
