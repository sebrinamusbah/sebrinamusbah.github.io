import React from "react";
import { FaGithub, FaTelegram, FaEnvelope, FaPhone } from "react-icons/fa";

function Contact() {
  const contactMethods = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "sebrinamusbah811@gmail.com",
      link: "mailto:sebrinamusbah811@gmail.com",
      color: "hover:bg-red-500",
    },
    {
      icon: FaGithub,
      label: "GitHub",
      value: "sebrinamusbah",
      link: "https://github.com/sebrinamusbah",
      color: "hover:bg-gray-700",
    },
    {
      icon: FaTelegram,
      label: "Telegram",
      value: "@mzses",
      link: "https://t.me/mzses",
      color: "hover:bg-blue-500",
    },
    {
      icon: FaPhone,
      label: "Phone",
      value: "0985673299 / 0939099022",
      link: "tel:0985673299",
      color: "hover:bg-green-500",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities and
            collaborations
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                target={
                  method.label !== "Email" && method.label !== "Phone"
                    ? "_blank"
                    : "_self"
                }
                rel="noopener noreferrer"
                className={`group flex items-center gap-4 p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${method.color}`}
              >
                <div
                  className={`p-3 rounded-lg bg-gray-100 dark:bg-gray-800 group-hover:bg-white/20 transition-colors duration-300`}
                >
                  <method.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {method.label}
                  </p>
                  <p className="text-gray-800 dark:text-white font-semibold">
                    {method.value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="mailto:sebrinamusbah811@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
            >
              <FaEnvelope />
              Send me a message
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
