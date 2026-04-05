import React, { useState } from "react";
import {
  FaGithub,
  FaTelegram,
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  const socialLinks = [
    {
      icon: FaEnvelope,
      link: "mailto:sebrinamusbah811@gmail.com",
    },
    {
      icon: FaGithub,
      link: "https://github.com/sebrinamusbah",
    },
    {
      icon: FaTelegram,
      link: "https://t.me/mzses",
    },
    {
      icon: FaLinkedin,
      link: "https://linkedin.com",
    },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    try {
      const res = await fetch("https://formspree.io/f/mdappnyl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus("Something went wrong. Try again.");
      }
    } catch (err) {
      setStatus("Network error. Try again.");
    }

    setIsSubmitting(false);
  };

  return (
    <section
      id="contact"
      className="py-14 bg-gray-50 dark:bg-gray-800  scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-10">
        {/* LEFT */}
        <div className="flex flex-col justify-center text-gray-900 dark:text-white">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Contact Me
          </h1>

          <p className="mb-6 text-gray-700 dark:text-gray-300">
            Reach out for projects, collaboration, or just say hi.
          </p>

          <div className="flex items-center gap-4 mb-2">
            <FaEnvelope className="text-blue-600" />
            <span>sebrinamusbah811@gmail.com</span>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <FaPhone className="text-green-400" />
            <span>0985673299</span>
          </div>

          <div className="flex gap-4 mt-4">
            {socialLinks.map((s, i) => (
              <a
                key={i}
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-cyan-400 hover:text-black transition"
              >
                <s.icon />
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-xl flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="p-3 rounded bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-1 focus:ring-cyan-400 outline-none"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="p-3 rounded bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-1 focus:ring-cyan-400 outline-none"
          />

          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            required
            className="p-3 rounded bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-1 focus:ring-cyan-400 outline-none"
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            placeholder="Your Message"
            required
            className="p-3 rounded bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-1 focus:ring-cyan-400 outline-none resize-none"
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded hover:scale-105 transition flex justify-center items-center gap-2"
          >
            {isSubmitting ? (
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <>
                <FaPaperPlane />
                Submit
              </>
            )}
          </button>
          {status && (
            <p className="text-sm mt-2 text-gray-700 dark:text-gray-300">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
