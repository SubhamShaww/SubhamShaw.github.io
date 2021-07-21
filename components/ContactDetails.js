import {PhoneIcon, MailIcon} from '@heroicons/react/outline';
import {useState} from 'react';

function ContactDetails({gmail, mobile}) {
    const [copiedNo, setCopiedNo] = useState(false);
    const [copiedEmail, setCopiedEmail] = useState(false);

    function copyNoToClipboard(e) {
        const text = e.target.innerText;
        const elem = document.createElement("textarea");
        document.body.appendChild(elem);
        elem.value = text;
        elem.select();
        document.execCommand("copy");
        document.body.removeChild(elem);


        setCopiedNo(true);
        setInterval(() => setCopiedNo(false), 1500);
    }

    function copyEmailToClipboard(e) {
        const text = e.target.innerText;
        const elem = document.createElement("textarea");
        document.body.appendChild(elem);
        elem.value = text;
        elem.select();
        document.execCommand("copy");
        document.body.removeChild(elem);


        setCopiedEmail(true);
        setInterval(() => setCopiedEmail(false), 1500);
    }

    return (
        <div className="section-box bg-image-2">
            <p className="section-heading-1">Contact Me</p>
            <p className="section-heading-2">Get In Touch</p>

            <div className="used-grid-template-1">
                <div className="flex items-center gap-x-4">
                    <div>
                        <PhoneIcon className='h-10 p-2 text-white bg-yellow-600 rounded-full' />
                    </div>

                    <div>
                        <p className="details-title">Call Me</p>
                        <p className="cursor-pointer details-text" onClick={(e) => copyNoToClipboard(e)}>{mobile} {copiedNo && <span>copied!</span>}</p>
                    </div>
                </div>
                <div className="flex items-center gap-x-4">
                    <div>
                        <MailIcon className="h-10 p-2 text-white bg-yellow-600 rounded-full" />
                    </div>

                    <div>
                        <p className="details-title">E-mail</p>
                        <p className="cursor-pointer details-text" onClick={(e) => copyEmailToClipboard(e)}>{gmail} {copiedEmail && <span>copied!</span>}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactDetails;

