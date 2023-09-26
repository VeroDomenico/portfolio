import React from 'react';

function ContactMeFooter() {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto text-center">
                <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
                <p className="text-lg mb-4">
                    I'd love to hear from you. Feel free to reach out!
                </p>
                <div className="flex justify-center space-x-4">
                    <a
                        href="mailto:dmecglobal@gmail.com"
                        className="text-blue-400 hover:text-blue-500 transition duration-300"
                        >
                        Email
                    </a>
                    <a
                        href="https://www.linkedin.com/in/dominic-meconi/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-500 transition duration-300"
                        >
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com/VeroDomenico"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-500 transition duration-300"
                        >
                        Github
                    </a>
                    {/* Add more social media or contact links as needed */}
                </div>
            </div>
        </footer>
        );
}

export default ContactMeFooter;
