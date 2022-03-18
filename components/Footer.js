import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

function Footer({ linkedin, github, twitter }) {
    return (
        <div className="footer-box">
            {/* left */}
            <p className="flex-grow text-lg font-semibold text-gray-100">
                SUBHAM SHAW
            </p>

            {/* right */}
            <div className="flex items-center space-x-2">
                {twitter ?
                    (<a
                        href={twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-contact"
                    >
                        <FontAwesomeIcon className="h-4" icon={faTwitter} />
                    </a>)
                    : ""
                }

                {linkedin ?
                    (<a
                        href={linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-contact"
                    >
                        <FontAwesomeIcon className="h-4" icon={faLinkedin} />
                    </a>)
                    : ""
                }

                {github ?
                    (<a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-contact"
                    >
                        <FontAwesomeIcon className="h-4" icon={faGithub} />
                    </a>)
                    : ""
                }

            </div>
        </div>
    );
}

export default Footer;
