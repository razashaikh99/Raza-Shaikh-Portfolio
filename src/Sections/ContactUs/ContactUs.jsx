import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { FaUser, FaEnvelope, FaTag, FaCommentDots, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      name="contact"
      className={`py-16 sm:py-20 ${theme === "dark" ? "bg-dark text-light" : "bg-light text-dark"}`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center pb-8 sm:pb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-blue">
            Contact Me
          </h2>
          <p
            className={`mt-3 text-sm sm:text-base ${theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
          >
            Feel free to reach out by filling the form below ✨
          </p>
        </div>

        {/* Contact Card */}
        <div
          className={`rounded-2xl shadow-xl p-6 sm:p-8 transition duration-500 ${theme === "dark"
            ? "bg-[#111] border border-gray-700"
            : "bg-white border border-gray-200"
            }`}
        >
          <form className="grid gap-5 sm:gap-6">
            {/* Name */}
            <div className="relative">
              <FaUser className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400 text-sm sm:text-base" />
              <input
                data-aos="fade-up"
                type="text"
                placeholder="Your Name"
                className={`w-full pl-11 pr-4 py-3 rounded-xl border text-sm sm:text-base focus:outline-none focus:ring-2 transition ${theme === "dark"
                  ? "bg-[#1a1a1a] border-gray-700 text-white placeholder-gray-400 focus:ring-blue"
                  : "bg-gray-50 border-gray-300 text-black placeholder-gray-500 focus:ring-blue"
                  }`}
              />
            </div>

            {/* Email */}
            <div className="relative">
              <FaEnvelope className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400 text-sm sm:text-base" />
              <input
                data-aos="fade-up"
                type="email"
                placeholder="Your Email"
                className={`w-full pl-11 pr-4 py-3 rounded-xl border text-sm sm:text-base focus:outline-none focus:ring-2 transition ${theme === "dark"
                  ? "bg-[#1a1a1a] border-gray-700 text-white placeholder-gray-400 focus:ring-blue"
                  : "bg-gray-50 border-gray-300 text-black placeholder-gray-500 focus:ring-blue"
                  }`}
              />
            </div>

            {/* Subject */}
            <div className="relative">
              <FaTag className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400 text-sm sm:text-base" />
              <input
                data-aos="fade-up"
                type="text"
                placeholder="Subject"
                className={`w-full pl-11 pr-4 py-3 rounded-xl border text-sm sm:text-base focus:outline-none focus:ring-2 transition ${theme === "dark"
                  ? "bg-[#1a1a1a] border-gray-700 text-white placeholder-gray-400 focus:ring-blue"
                  : "bg-gray-50 border-gray-300 text-black placeholder-gray-500 focus:ring-blue"
                  }`}
              />
            </div>

            {/* Message */}
            <div className="relative">
              <FaCommentDots className="absolute top-4 left-4 text-gray-400 text-sm sm:text-base" />
              <textarea
                data-aos="fade-up"
                rows="5"
                placeholder="Your Message"
                className={`w-full pl-11 pr-4 py-3 rounded-xl border text-sm sm:text-base focus:outline-none focus:ring-2 transition ${theme === "dark"
                  ? "bg-[#1a1a1a] border-gray-700 text-white placeholder-gray-400 focus:ring-blue"
                  : "bg-gray-50 border-gray-300 text-black placeholder-gray-500 focus:ring-blue"
                  }`}
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className={`flex items-center justify-center gap-2 px-8 py-3 rounded-full shadow-lg transition font-semibold cursor-pointer transform hover:scale-105 ${theme === "dark"
                  ? "bg-blue text-light hover:bg-blue-700"
                  : "bg-blue text-white hover:bg-blue-700"
                  }`}
              >
                <FaPaperPlane /> Send Message
              </button>
            </div>
          </form>
        </div>
      </div >
    </section >
  );
}
