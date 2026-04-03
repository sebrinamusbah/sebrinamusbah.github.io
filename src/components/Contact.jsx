import React, { useState } from "react";
import {
  FaGithub,
  FaTelegram,
  FaEnvelope,
  FaPhone,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const socialLinks = [
    {
      icon: FaEnvelope,
      label: "Email",
      link: "mailto:sebrinamusbah811@gmail.com",
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      icon: FaGithub,
      label: "GitHub",
      link: "https://github.com/sebrinamusbah",
      color: "text-gray-700 dark:text-gray-400",
      bgColor: "bg-gray-50 dark:bg-gray-800",
    },
    {
      icon: FaTelegram,
      label: "Telegram",
      link: "https://t.me/mzses",
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
    },
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Form submitted:", formData);
    alert("Thank you for your message!");
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-14 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Get In Touch
          </h2>
          <div className="w-16 h-0.5 bg-blue-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4">
            Have a question or want to work together?
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
            <div className="flex items-center gap-2 mb-4">
              <FaPaperPlane className="text-blue-600 dark:text-blue-400" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Send a Message
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email Address"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="4"
                placeholder="Your Message"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all resize-none"
              ></textarea>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2 disabled:opacity-50 shadow-sm"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Social Links */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Connect with Me
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${social.bgColor} p-3 rounded-full hover:scale-110 transition-transform duration-200 hover:shadow-md`}
                    title={social.label}
                  >
                    <social.icon className={`w-5 h-5 ${social.color}`} />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Card */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl shadow-sm border border-blue-100 dark:border-blue-800 p-6">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 bg-green-500 rounded-full animate-pulse"></div>
                <div className="flex-1">
                  <h4 className="font-semibold text-lg text-gray-900 dark:text-white">
                    Available for Work
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                    I'm currently available for freelance projects,
                    collaborations, and job opportunities.
                  </p>
                  <div className="mt-3 flex gap-2">
                    <span className="inline-flex items-center px-2 py-1 bg-white dark:bg-gray-800 rounded-md text-xs text-gray-600 dark:text-gray-400">
                      ⏰ Response within 24h
                    </span>
                    <span className="inline-flex items-center px-2 py-1 bg-white dark:bg-gray-800 rounded-md text-xs text-gray-600 dark:text-gray-400">
                      🌍 UTC+7
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
              <div className="flex items-center gap-3">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-full">
                  <FaPhone className="text-blue-600 dark:text-blue-400 w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Phone
                  </p>
                  <p className="text-lg font-medium text-gray-900 dark:text-white">
                    0985673299
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
