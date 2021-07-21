import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin, faFacebook} from "@fortawesome/free-brands-svg-icons";

function Footer({linkedin, github, facebook}) {
    return (
        <div className="footer-box">
            {/* left */}
            <p className="flex-grow text-sm font-semibold text-gray-100 sm:text-lg">
                SUBHAM SHAW
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
            </div>
        </div>
    );
}

export default Footer;
