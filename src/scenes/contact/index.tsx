import githubLogo from "@/assets/github-logo.png";
import emailLogo from "@/assets/email-logo.png";
import linkedInLogo from "@/assets/linkedin-logo.png";

const Contact = () => {
  return (
    <section id="contact" className="relative w-screen h-screen bg-blue-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-orange-400 mb-12">Contact me</h1>

        {/* White Square */}
        <div className="bg-white p-12 shadow-lg max-w-md mx-auto">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Let's get in touch!</h2>
          <hr className="border-t border-gray-300 mb-6" />

          <div className="mb-6">
            <a
              href="mailto:vidmarkvanja@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 text-lg flex items-center justify-center hover:underline"
            >
              <img src={emailLogo} alt="Email" className="w-9 h-9 mr-2" />
              vidmarkvanja@gmail.com
            </a>
          </div>

          <div className="flex justify-center gap-6">
            <a href="https://www.linkedin.com/in/vanja-vidmark-858110235/" target="_blank" rel="noopener noreferrer">
              <img src={linkedInLogo} alt="LinkedIn" className="w-9 h-9" />
            </a>
            <a href="https://github.com/VanjaVidmark" target="_blank" rel="noopener noreferrer">
              <img src={githubLogo} alt="GitHub" className="w-9 h-9" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
