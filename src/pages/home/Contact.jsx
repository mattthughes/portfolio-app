const Contact = () => {
    return (
        <section id="contact" className="py-12 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4">
                <h3 className="text-3xl font-bold text-center">Contact Me</h3>
                <p className="text-lg text-center mt-4">
                    If you would like to get in touch, feel free to reach out via email or connect with me on LinkedIn.
                </p>
                <div className="mt-8 flex justify-center gap-6">
                    <a
                        href="https://www.linkedin.com/in/matthew-hughes-37a3291b8/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;