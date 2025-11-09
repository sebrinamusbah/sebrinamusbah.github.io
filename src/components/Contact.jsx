import React from "react";
import "../css/contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2>Contact Me</h2>
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:sebrinamusbah811@gmail.com">
            sebrinamusbah811@gmail.com
          </a>
        </p>
        <p>
          <strong>GitHub:</strong>{" "}
          <a
            href="https://github.com/sebrinamusbah"
            target="_blank"
            rel="noreferrer"
          >
            sebrinamusbah
          </a>
        </p>
        <p>
          <strong>Telegram:</strong>{" "}
          <a href="https://t.me/mzses" target="_blank" rel="noreferrer">
            @mzses
          </a>
        </p>
        <p>
          <strong>Phone:</strong> 0985673299, 0939099022
        </p>
        <a href="mailto:sebrinamusbah811@gmail.com" className="btn btn-primary">
          Send Email
        </a>
      </div>
    </section>
  );
}

export default Contact;
