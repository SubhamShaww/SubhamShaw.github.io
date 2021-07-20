import {MailIcon} from "@heroicons/react/outline";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin, faFacebook} from "@fortawesome/free-brands-svg-icons";

function Footer({gmail, linkedin, github, facebook}) {
    return (
        <div className="footer-box">
            {/* left */}
            <p className="flex-grow text-sm font-semibold text-gray-100 sm:text-lg">
                GET IN TOUCH
            </p>

            {/* right */}
            <div className="flex items-center space-x-2">
                <a
                    href={facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-contact"
                >
                    <FontAwesomeIcon className="h-4" icon={faFacebook} />
                </a>

                <a
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-contact"
                >
                    <FontAwesomeIcon className="h-4" icon={faLinkedin} />
                </a>

                <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-contact"
                >
                    <FontAwesomeIcon className="h-4" icon={faGithub} />
                </a>

                <a
                    href={`mailto:${gmail}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-contact"
                >
                    <MailIcon className="h-4" />
                </a>
            </div>
        </div>
    );
}

export default Footer;
