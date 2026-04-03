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
      color: "text-red-500",
      bgColor: "bg-red-100 dark:bg-red-900/30",
    },
    {
      icon: FaGithub,
      label: "GitHub",
      link: "https://github.com/sebrinamusbah",
      color: "text-gray-700 dark:text-gray-400",
      bgColor: "bg-gray-100 dark:bg-gray-800",
    },
    {
      icon: FaTelegram,
      label: "Telegram",
      link: "https://t.me/mzses",
      color: "text-blue-500",
      bgColor: "bg-blue-100 dark:bg-blue-900/30",
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

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Form submitted:", formData);
    alert("✨ Thank you for your message!");
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-13 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4">
            Have a question or want to work together?
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className="flex items-center gap-2 mb-4">
              <FaPaperPlane className="text-blue-600" />
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
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email Address"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="4"
                placeholder="Your Message"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              ></textarea>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
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
            {/* Social Links - Clickable Icons */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
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
                    className={`${social.bgColor} p-3 rounded-full hover:scale-110 transition-transform duration-200`}
                    title={social.label}
                  >
                    <social.icon className={`w-5 h-5 ${social.color}`} />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Card */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg shadow-md p-6 text-white">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 bg-white rounded-full animate-pulse"></div>
                <div className="flex-1">
                  <h4 className="font-semibold text-lg">Available for Work</h4>
                  <p className="text-white/90 text-sm mt-1">
                    I'm currently available for freelance projects,
                    collaborations, and job opportunities.
                  </p>
                  <div className="mt-3 flex gap-2">
                    <span className="inline-flex items-center px-2 py-1 bg-white/20 rounded-md text-xs">
                      ⏰ Response within 24h
                    </span>
                    <span className="inline-flex items-center px-2 py-1 bg-white/20 rounded-md text-xs">
                      🌍 UTC+7
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone Card - Just Number, No Connect Button */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full">
                  <FaPhone className="text-green-600 dark:text-green-400 w-5 h-5" />
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
